var clickNumber = 0;

var hot = document.querySelector('.hot-button');
var count = document.querySelector('.click-count');

hot.addEventListener('click', hotButton);
count.addEventListener('click', hotButton);

function hotButton(event) {
  clickNumber++;
  var temperature = null;
  if (clickNumber < 4) {
    temperature = 'cold';
  } else if (clickNumber < 7) {
    temperature = 'cool';
  } else if (clickNumber < 10) {
    temperature = 'tepid';
  } else if (clickNumber < 13) {
    temperature = 'warm';
  } else if (clickNumber < 16) {
    temperature = 'hot';
  } else if (clickNumber >= 16) {
    temperature = 'nuclear';
  }
  count.textContent = 'Clicks: ' + clickNumber;
  hot.className = 'hot-button ' + temperature;
}
