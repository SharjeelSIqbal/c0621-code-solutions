const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('Sharjeel');

promise1
  .then(value => {
    console.log(value);
  })
  .catch(reason => {
    console.error(`${reason}`);
  });
