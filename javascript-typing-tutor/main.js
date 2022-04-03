var charSpan = document.querySelectorAll('span');
var i = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === null) {
    charSpan[i].className = 'letters';
  } if (charSpan[i].innerText === event.key) {
    charSpan[i].className = 'correct';
    i++;
  } else {
    charSpan[i].className = 'incorrect';
  }
});
