const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('show');
});
