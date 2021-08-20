const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((initialValue, nextValues) => initialValue + nextValues);
console.log(sum);

const product = numbers.reduce((initialValue, nextValues) => initialValue * nextValues);
console.log(product);

const accountClone = [...account];
const balance = accountClone.reduce((x, balance) => {
  x.type = 'balance';
  if (balance.type === 'deposit') {
    x.amount += balance.amount;
  } else {
    x.amount -= balance.amount;
  }
  return x;
});
console.log(balance);

const traitsClone = [...traits];
const composite = traitsClone.reduce((initialValue, currentValue) => Object.assign(initialValue, currentValue));
console.log(composite);
