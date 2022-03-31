var taskList = document.querySelector('.task-list');
var taskDelegation = document.querySelector('ul');

taskList.addEventListener('click', task);
taskDelegation.addEventListener('click', task);

function task(event) {
  if (event.target && event.target.tagName === 'BUTTON') {
    var element = document.querySelector('li');
    var ancestor = element.closest('.task-list-item');
    element.remove('button');
    console.log(ancestor);
    console.log('event.target:', event.target);
    console.log('event.target.tagName:', event.target.tagName);
  }
}
