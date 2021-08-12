const fs = require('fs');
fs.writeFile('note.txt', process.argv[process.argv.length - 1], 'utf8', err => {
  if (err) throw err;
});
