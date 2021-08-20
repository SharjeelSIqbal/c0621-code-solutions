
const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
    host: 'localhost',
    port: 8081,
    database: 'studentGradeTable'
  }
});
app.use(express.json());
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

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const values = [newGrade.name, newGrade.course, newGrade.score];
  const sql = `
  insert into "grades"
  ("name", "course", "score")
  values ($1, $2, $3)
  returning "grades";
  `;
  if (!newGrade.name || !newGrade.course || !newGrade.score) {
    res.status(400).send('Bad request');
  } else {
    db.query(sql, values, (err, results) => {
      if (err) {
        res.status(500).send('An unexpected error occurred');
      } else {
        res.status(201).send(results.rows);
      }
    });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const updatedGrade = req.body;
  const values = [updatedGrade.name, updatedGrade.course, updatedGrade.score, req.params.gradeId];
  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *;;
  `;
  if (!req.params.gradeId || req.params.gradeId < 0) {
    res.status(400).send('Bad Request');
    return;
  }
  db.query(sql, values, (err, results) => {
    if (err) {
      res.status(404).send(results.rows);
      return;
    }
    if (results.rows.length > 0) {
      res.status(200).send(results.rows);
      return;
    }
    res.status(500).send('Unexpected error occurred');
  });
});

// app.post('/api/grades', (req, res) => {
//   const newGrade = req.body;
//   if (newGrade.name && newGrade.course && newGrade.score) {
//     const sqlIdNumber = `
//     select max("gradeId")
//     from "grades"
//     group by "gradeId"
//     order by "gradeId" desc
//     limit 1;
//     `;
//     db.query(sqlIdNumber, (err, result) => {
//       if (err) {
//         res.status(400).json(err);
//       } else {
//         newGrade.gradeId = result
//         res.status(200).json(result);
//       }
//     });
//     const sqlInsert = `
//     insert into "grades"
//     ("gradeId",
//     "name",
//     "course",
//     "score",
//     "createdAt")
//     values ('${newGrade.gradeId}',
//     '${newGrade.name}',
//     '${newGrade.course}',
//     '${newGrade.score}',
//     '${newGrade.createdAt}')
//     returning *;`;
//     db.query(sqlInsert, (err, result) => {
//       if (!err) {
//         res.status(201).json(result.rows);
//       } else {
//         res.status(500).json(err);
//       }
//     });
//   } else {
//     res.status(400).json('Bad Request');
//   }
// });

app.listen(3000);
