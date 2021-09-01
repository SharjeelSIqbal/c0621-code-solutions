
const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
//
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
  `;
  db.query(sql)
    .then(results => {
      res.status(200).json(results.rows, null, 2);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured' });
    });
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const values = [newGrade.name, newGrade.course, newGrade.score];
  const sql = `
  insert into "grades"
  ("name", "course", "score")
  values ($1, $2, $3)
  returning *;
  `;
  if (!newGrade.name || !newGrade.course || !newGrade.score) {
    res.status(400).json({ error: 'Bad request' });
    return;
  }
  db.query(sql, values)
    .then(results => {
      res.status(201).json(results.rows[0], null, 2);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const updatedGrade = req.body;
  const values = [updatedGrade.name, updatedGrade.course, updatedGrade.score, req.params.gradeId];
  const sqlUpdate = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *;;
  `;
  if (!req.params.gradeId || req.params.gradeId < 0) {
    res.status(400).json({ error: 'Bad Request' });
    return;
  }
  db.query(sqlUpdate, values)
    .then(results => {
      if (results.rows.length > 0) {
        res.status(200).json(results.rows[0]);
      } else {
        res.status(404).json({ error: `${req.params.gradeId} does not exist` });
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const values = [req.params.gradeId];
  const sqlDelete = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;
  if (!req.params.gradeId || req.params.gradeId < 0) {
    res.status(400).json({ error: 'Bad Request' });
    return;
  }
  db.query(sqlDelete, values)
    .then(results => {
      if (results.rows.length > 0) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: `${req.params.gradeId} does not exist` });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured' });
    });
});

app.listen(3000);
