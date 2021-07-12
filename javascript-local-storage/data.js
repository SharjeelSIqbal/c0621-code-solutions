/* exported todos */

var todos = [];
function jsonString(event) {

  var todosJSON = JSON.stringify(todos);
  return localStorage.setItem('javascript-local-storage', todosJSON);
}
window.addEventListener('beforeunload', jsonString);

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
