var openButton = document.querySelector('.open-button');
var closeButton = document.querySelector('.no-button');
var modal = document.querySelector('.modal');
var background = document.querySelector('.background');

openButton.addEventListener('click', openEvent);
closeButton.addEventListener('click', closeEvent);

function openEvent(event) {
  modal.className = 'modal';
  background.className = 'background';
}

function closeEvent(event) {
  modal.className = 'no-show';
  background.classList.remove('background');
}
