const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];
const evenNumbers = [];
numbers.filter(even => {
  if (even % 2 === 0) {
    evenNumbers.push(even);
  }
  return evenNumbers;
});
console.log(evenNumbers);

const overFive = [];
numbers.filter(over => {
  if (over > 5) {
    overFive.push(over);
  }
  return overFive;
});
console.log(overFive);

const startWithE = [];
names.filter(e => {
  if (e[0] === 'E') {
    startWithE.push(e);
  }
  return startWithE;
});
console.log(startWithE);

const haveD = [];
names.filter(d => {
  if (d.toLowerCase().includes('d')) {
    haveD.push(d);
  }
  return haveD;
});
console.log(haveD);
