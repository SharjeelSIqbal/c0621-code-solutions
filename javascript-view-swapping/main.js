var tabContainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var view = document.querySelectorAll('.view');

function tabCon(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].setAttribute('class', 'tab');
    }
    if (!event.target.matches('.active')) {
      event.target.setAttribute('class', 'tab active');
    }
    var viewing = event.target.getAttribute('data-view');
    for (var j = 0; j < view.length; j++) {
      if (view[j].getAttribute('data-view') === viewing) {
        view[j].className = 'view';
      } else {
        view[j].className = 'view hidden';
      }
    }
  }

}

tabContainer.addEventListener('click', tabCon);
