const fs = require('fs');
process.argv = process.argv.slice(2);
fs.readFile(process.argv[0], 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(process.argv[1], data, 'utf8', err => {
    if (err) throw err;
  });
});

fs.readFile(process.argv[0], 'utf8', (err, data) => {
  if (err) throw err;

});

fs.readFile(process.argv[1], 'utf8', (err, data) => {
  if (err) throw err;

});
