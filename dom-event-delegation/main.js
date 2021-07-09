var taskList = document.querySelector('.task-list');
function done(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var finished = event.target.closest('.task-list-item');
    finished.remove();

  }
}
taskList.addEventListener('click', done);
