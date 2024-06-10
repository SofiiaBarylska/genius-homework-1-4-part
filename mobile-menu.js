var mobileMenu = document.querySelector('.mobile-menu');
var menuBtnOpen = document.querySelector('.menu-btn-open');
var menuBtnClose = document.querySelector('.menu-btn-close');

var burgerMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', burgerMenu);
menuBtnClose.addEventListener('click', burgerMenu);