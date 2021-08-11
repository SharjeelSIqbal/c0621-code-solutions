const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
let value = process.argv[process.argv.length - 1];
value = value.split(' ');
const value1 = parseInt(value[0]);
const value2 = parseInt(value[2]);
if (value[1] === 'plus') {
  const result = add(value1, value2);
  console.log(`result: ${result}`);

}
if (value[1] === 'minus') {
  const result = subtract(value1, value2);
  console.log(`result: ${result}`);

}

if (value[1] === 'times') {
  const result = multiply(value1, value2);
  console.log(`result: ${result}`);
}

if (value[1] === 'over') {
  const result = divide(value1, value2);
  console.log(`result: ${result}`);
}
