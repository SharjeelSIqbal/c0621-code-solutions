
const express = require('express');
const app = express();
const port = 3000;

let nextId = 2;
const grades = {
  1: {
    id: 1,
    name: 'Susan B. Anthony',
    course: 'Sociology',
    score: 100
  }
};
app.use(express.json());
app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res, next) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201).send(grades[nextId - 1]);
});

app.listen(port, () => {
});
