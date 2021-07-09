var nameInput = document.querySelector('#user-name');
var emailInput = document.querySelector('#user-email');
var message = document.querySelector('#user-message');
function handleFocus(event) {
  console.log('focus event fired \n');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired\n');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log('event target value: ' + event.target.value);

}

nameInput.addEventListener('focus', handleFocus);
nameInput.addEventListener('blur', handleBlur);
nameInput.addEventListener('input', handleInput);

emailInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('input', handleInput);

message.addEventListener('focus', handleFocus);
message.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);
