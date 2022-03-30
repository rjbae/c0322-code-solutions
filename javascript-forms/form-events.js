function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', 'name');
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', 'name');
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var firstInput = document.querySelector('#user-name');
var secondInput = document.querySelector('#user-email');
var text = document.querySelector('#user-message');

firstInput.addEventListener('focus', handleFocus);
firstInput.addEventListener('blur', handleBlur);
firstInput.addEventListener('input', handleInput);

secondInput.addEventListener('focus', handleFocus);
secondInput.addEventListener('blur', handleBlur);
secondInput.addEventListener('input', handleInput);

text.addEventListener('focus', handleFocus);
text.addEventListener('blur', handleBlur);
text.addEventListener('input', handleInput);
