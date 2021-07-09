var taskList = document.querySelector('.task-list');
function done(event) {
  if (event.target.tagName === 'BUTTON') {
    var finished = event.target.closest('.task-list-item');
    finished.remove();

  }
}
taskList.addEventListener('click', done);
