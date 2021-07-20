var letters = document.querySelectorAll('span');
var count = 0;
letters[count].className = 'word';
function getInput(event) {
  checkLetter(count);
  reset();
  if (letters[count].className === 'correct') {
    count++;
    letters[count].className = 'word';
  }
}

function checkLetter(index) {
  if (event.key !== letters[index].textContent) {
    letters[index].className = 'incorrect';
  } else {
    letters[index].className = 'correct';
  }
}

// function getInput()
document.addEventListener('keydown', getInput);

function reset() {
  if (count === letters.length - 1) {

    for (var i = 0; i < letters.length; i++) {
      letters[i].className = '';
    }
    count = 0;
  }
  return count;
}
