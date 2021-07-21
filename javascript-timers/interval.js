var h1 = document.querySelector('h1');
var count = parseInt(h1.textContent);
function countDown() {
  h1.textContent = count;
  count -= 1;
  if (count === -1) {
    h1.textContent = '~~~~~Earth Below Us~~~~~~';
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(countDown, 1000);
