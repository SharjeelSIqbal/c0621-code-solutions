const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
let value = process.argv[process.argv.length - 1];
value = value.split(' ');
if (value[1] === 'plus') {
  const result = add.add(parseInt(value[0]), parseInt(value[2]));
  console.log(`result: ${result}`);

}
if (value[1] === 'minus') {
  const result = subtract.subtract(parseInt(value[0]), parseInt(value[2]));
  console.log(`result: ${result}`);

}

if (value[1] === 'times') {
  const result = multiply.multiply(parseInt(value[0]), parseInt(value[2]));
  console.log(`result: ${result}`);
}

if (value[1] === 'over') {
  const result = divide.divide(parseInt(value[0]), parseInt(value[2]));
  console.log(`result: ${result}`);
}
