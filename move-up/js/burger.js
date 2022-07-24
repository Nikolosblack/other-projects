const burgerMenu = document.querySelector('.burger-menu');
const mobMenu = document.querySelector('.mobile__menu__wrapper')

burgerMenu.addEventListener('click', function() {
    this.classList.toggle("close");
    document.body.classList.toggle("lock");
    mobMenu.classList.toggle("active")
});
