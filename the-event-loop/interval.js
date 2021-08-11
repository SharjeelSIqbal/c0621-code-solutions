let i = 3;
const timer = setInterval(() => {
  console.log(i);
  i--;
  if (i === 0) {
    console.log('Blast off!');
    clearInterval(timer);
  }
}, 1000);
