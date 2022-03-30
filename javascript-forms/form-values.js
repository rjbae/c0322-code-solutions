function submit(event) {
  event.preventDefault();
  var name = contact.elements.name.value;
  var email = contact.elements.email.value;
  var message = contact.elements.message.value;
  var messageData = {
    name: name,
    email: email,
    message: message
  };
  console.log('messageData:', messageData);
  document.querySelector('#contact-form').reset();
}

var contact = document.querySelector('#contact-form');
contact.addEventListener('submit', submit);
