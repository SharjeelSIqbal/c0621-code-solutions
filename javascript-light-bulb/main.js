var shadowColor = document.querySelector('.shadow-black');
var buttonColor = document.querySelector('.light-bulb-black');
var backgroundColor = document.querySelector('.dark');
var button = document.querySelector('.button');
var clickCounter = 0;
function letThereBeLight(event) {
  clickCounter += 1;
  if (clickCounter % 2 === 1) {
    shadowColor.setAttribute('class', 'shadow-light button-shadow');
    buttonColor.setAttribute('class', 'light-bulb-light light-bulb button');
    backgroundColor.setAttribute('class', 'light');
  } else {
    shadowColor.setAttribute('class', 'shadow-black button-shadow');
    buttonColor.setAttribute('class', 'light-bulb-black light-bulb button');
    backgroundColor.setAttribute('class', 'dark');
  }
}

button.addEventListener('click', letThereBeLight);
