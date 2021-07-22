
var $images = document.querySelectorAll('img');
var $carousel = document.querySelector('.container');
var $pictureDisplayed = document.querySelectorAll('.fa-circle');
var $right = document.querySelector('#right');
var $left = document.querySelector('#left');

var currentImage = 0;

function rotateManual(event) {
  for (var i = 0; i < $images.length; i++) {
    if (event.target === $pictureDisplayed[i]) {
      currentImage = i;
      setImage(i);
      resetInterval();
    }
  }

  if (event.target === $right) {
    currentImage++;
    if (currentImage === $images.length) {
      currentImage = 0;
      setImage(currentImage);
    } else { setImage(currentImage); }
    resetInterval();
  }
  if (event.target === $left) {
    currentImage--;
    if (currentImage < 0) {
      currentImage = $images.length - 1;
      setImage(currentImage);
    } else { setImage(currentImage); }
    resetInterval();
  }

}

$carousel.addEventListener('click', rotateManual);

function setImage(imageIndex) {
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'image hidden';
    $pictureDisplayed[i].className = 'far fa-circle padding';
  }
  $images[imageIndex].className = 'image';
  $pictureDisplayed[imageIndex].className = 'fas fa-circle padding';

}

function rotateAuto() {

  if (currentImage >= $images.length) {
    currentImage = 0;
    setImage(currentImage);
  } else {
    currentImage++;
    if (currentImage === $images.length) {
      currentImage = 0;
    }
    setImage(currentImage);
  }
}

var timerId = setInterval(rotateAuto, 1000);

function resetInterval() {
  clearInterval(timerId);
  timerId = setInterval(rotateAuto, 2000);

}
