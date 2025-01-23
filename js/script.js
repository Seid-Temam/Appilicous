const openEl = document.querySelector('.open');
const headerEl = document.querySelector('header');
const closeEl = document.querySelector('.close');
const navEl = document.querySelector('.main-nav');
const mobileMenuEl = document.querySelector('.mobile-menu');

openEl.addEventListener('click', function () {
  headerEl.classList.toggle('is-open');
});
closeEl.addEventListener('click', function () {
  headerEl.classList.toggle('is-open');
});
