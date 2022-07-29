const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
});