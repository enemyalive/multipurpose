/* Модальное окно LOGIN */

var loginButton = document.querySelector('.login');
var closeButton = document.querySelector('.modal-close');
var modalWindow = document.querySelector('.modal');

loginButton.onclick = function () {
  modalWindow.classList.remove('hidden');
}

closeButton.onclick = function () {
  modalWindow.classList.add('hidden');
}


/* Мобильное меню */

var burgerButton = document.querySelector('.burger');
var menu = document.querySelector('.nav');

burgerButton.onclick = function () {
  menu.classList.toggle('mobile-nav-close');
  menu.classList.toggle('mobile-nav-open');
}

menu.onclick = function () {
  menu.classList.toggle('mobile-nav-open');
  menu.classList.toggle('mobile-nav-close');
}