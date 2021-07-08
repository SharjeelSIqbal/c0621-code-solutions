var button = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var modal = document.querySelectorAll('.no-show');
function displayModal(event) {
  for (var i = 0; i < modal.length; i++) {
    if (i === 0) {
      modal[i].setAttribute('class', 'modal-appear');
    } else {
      modal[i].setAttribute('class', 'modal center-text content');
    }
  }

}
function removeModal(event) {
  for (var i = 0; i < modal.length; i++) {
    modal[i].className += ' no-show';
  }
}

button.addEventListener('click', displayModal);
button2.addEventListener('click', removeModal);
