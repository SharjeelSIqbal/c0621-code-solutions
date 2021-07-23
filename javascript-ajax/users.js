var $userList = document.querySelector('#user-list');
var users = new XMLHttpRequest();
users.open('GET', 'https://jsonplaceholder.typicode.com/users');
users.responseType = 'json';
users.addEventListener('load', function () {
  console.log(users.status);
  console.log(users.response);
  for (var i = 0; i < users.response.length; i++) {
    var user = users.response[i];
    var $listItem = document.createElement('li');
    $listItem.textContent = user.name;
    $userList.append($listItem);
  }
});
users.send();
