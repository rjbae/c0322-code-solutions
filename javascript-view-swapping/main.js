var tabContainer = document.querySelector('.tab-container');
var tabNodes = document.querySelectorAll('.tab');
// var viewNodes = document.querySelectorAll('.view');

tabContainer.addEventListener('click', tabEvent);

function tabEvent(event) {

  if (!event.target.matches('.tab')) return;

  var tabIndex;
  for (tabIndex = 0; tabIndex < tabNodes.length; tabIndex++) {
    if (tabNodes === event.target) {
      tabNodes[tabIndex].className = 'tab active';
    } else {
      tabNodes[tabIndex].className = 'tab';
    }
  }
}
