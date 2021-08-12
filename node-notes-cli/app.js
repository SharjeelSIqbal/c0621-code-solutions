const noteBook = require('./data.json');
const fs = require('fs');
const commands = process.argv.splice(2);

function readNotes() {
  for (const keys in noteBook.notes) {
    console.log(`${keys}: ${noteBook.notes[keys]}`);
  }
}
function addNote() {
  noteBook.notes[noteBook.nextId] = commands[1];
  noteBook.nextId++;

  fs.writeFile('data.json', JSON.stringify(noteBook, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}
function deleteNote() {
  delete noteBook.notes[commands[1]];
  fs.writeFile('data.json', JSON.stringify(noteBook, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}
function updateNote() {
  noteBook.notes[commands[1]] = commands[2];
  fs.writeFile('data.json', JSON.stringify(noteBook, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}

if (commands[0] === 'read') {
  readNotes();
}
if (commands[0] === 'create') {
  addNote();

}
if (commands[0] === 'delete') {
  deleteNote();
}

if (commands[0] === 'update') {
  updateNote();
}
fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;

});
