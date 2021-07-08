var buttonClicked = 0;
var hot = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
function clickCounter(event) {
  buttonClicked += 1;
  clickCount.textContent = 'Clicks: ' + buttonClicked;
  if (buttonClicked < 4) {
    hot.setAttribute('class', 'hot-button cold');
  } else if (buttonClicked < 7) {
    hot.setAttribute('class', 'hot-button cool');
  } else if (buttonClicked < 10) {
    hot.setAttribute('class', 'hot-button tepid');
  } else if (buttonClicked < 13) {
    hot.setAttribute('class', 'hot-button warm');
  } else if (buttonClicked < 16) {
    hot.setAttribute('class', 'hot-button hot');
  } else {
    hot.setAttribute('class', 'hot-button nuclear');
  }
}
hot.addEventListener('click', clickCounter);
