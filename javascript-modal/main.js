var popUp = true;

var openButton = document.querySelector('.open-button');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.no-button');
var background = document.querySelector('.background');

openButton.addEventListener('click', modalEvent);
noButton.addEventListener('click', modalEvent);

function modalEvent(event) {
  var show = null;
  var noshow = null;
  if (popUp === true) {
    popUp = false;
    noshow = 'noshow';
  } else {
    popUp = true;
    show = 'show';
  }
  modal.className = 'modal ' + noshow;
  openButton.className = 'open-button ' + show;
  background.className = 'background ' + show;
}
