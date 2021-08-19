
const pg = require('pg');
const Express = require('express');
const app = Express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
    host: 'localhost',
    port: 8081,
    database: 'studentGradeTable'
  }
});
app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
  `;
  db.query(sql, (error, result) => {

    if (!error) {
      res.status(200).json(result.rows, null, 2);
    } else {
      res.status(400).json(error);
    }
  });
});

// app.post('/api/grades', (req, res) => {
//   console.log(req);
// });

// app.listen(3000);

// app.get('/api/grades', (req, res, next) => {
//   const sql = `
//   select *
//   from "grades"
//           `;
//   db.query(sql)
//     .then(result => {
//       res.status(200).json(result, null, 2);
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({ error: 'An unexpected error occured.' });
//     });
// });

// // app.get('/api/grades/:gradeId', (req, res, next) => {
// //   const gradeId = parseInt(req.params.gradeId, 10);
// //   if (!Number.isInteger(gradeId) || gradeId <= 0) {
// //     res.status(400).json({
// //       error: '"gradeId" must be a positive integer'
// //     });
// //     return;
// //   }
// //   const sql = `
// //   select "gradeId",
// //           "name",
// //           "course",
// //           "score",
// //           "createdAt"
// //     from "grades"
// //     where "gradeId" = $1;
// //     `;
// //   const params = [gradeId];
// //   db.query(sql, params)
// //     .then(result => {

// //       const grade = result.rows[0];
// //       if (!grade) {
// //         res.status(404).json({
// //           error: `Cannot find grade with "gradeId" ${gradeId}`
// //         });
// //       } else {
// //         res.json(grade);
// //       }
// //     })
// //     .catch(err => {
// //       console.error(err);
// //       res.status(500).json({
// //         error: 'An Unexpected error occured.'
// //       });
// //     });
// // });
