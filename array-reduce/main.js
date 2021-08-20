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

const balancer = (initialValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    initialValue += currentValue.amount;
  } else {
    initialValue -= currentValue.amount;
  }
  return initialValue;
};

const balance = account.reduce(balancer, 0);
console.log(balance);

const compositer = (initialValue, currentValue) => Object.assign(initialValue, currentValue);
const composite = traits.reduce(compositer, {});
console.log(composite);
console.log(traits);
