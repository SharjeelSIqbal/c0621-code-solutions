
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const data = require('./data.json');

app.use(express.json());
app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const id in data.notes) {
    arr.push(data.notes[id]);
  }
  res.status(200).send(arr);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400).send('Error: Number must be positive');
  }
  if (data.notes[req.params.id]) {
    res.status(200).send(data.notes[req.params.id]);
  } else {
    res.status(404).send(`Error: ${req.params.id} cannot be found`);
  }
});

app.post('/api/notes', (req, res) => {
  if (Object.keys(req.body)[0] === 'content') {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) throw err;
      res.status(200).send(req.body);
    });
  } else {
    res.status(400).send('Error: Content is a required field');
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400).send('Error: ID must be a positive integer');
  }
  if (data.notes[req.params.id]) {
    delete data.notes[req.params.id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) throw err;
    });
    res.sendStatus(200);
  } else {
    res.status(404).send(`Error ${req.params.id} request not found`);
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400).send('Error: ID must be a positive integer');
  } else if (data.notes[req.params.id]) {
    if (Object.keys(req.body)[0] === 'content') {
      data.notes[req.params.id] = req.body;
      data.notes[req.params.id].id = req.params.id;
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
        if (err) throw err;
      });
      res.status(200).send(req.body);
    } else {
      res.status(400).send('Error: "content" is a required field.');
    }
  } else {
    res.status(404).send(`Error ${req.params.id} request not found`);
  }
});
app.listen(port, () => {
});
