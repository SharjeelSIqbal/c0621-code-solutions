var contactForm = document.querySelector('form');

var values = {};
function submitted(event) {
  values.name = contactForm.elements.name.value;
  values.email = contactForm.elements.email.value;
  values.message = contactForm.elements.message.value;
  console.log(values);
  contactForm.elements.name.value = '';
  contactForm.elements.email.value = '';
  contactForm.elements.message.value = '';
  event.preventDefault();
}
contactForm.addEventListener('submit', submitted);
