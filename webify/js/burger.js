(function() {
    const burgerMenu = document.querySelector('.menu-btn ');
    const mobMenu = document.querySelector('.bar__menu');
    burgerMenu.addEventListener('click', function(e) {
        burgerMenu.classList.toggle("menu-btn-ext");
        mobMenu.classList.toggle("active");

    });
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if (burgerMenu.classList.contains("menu-btn-ext")) {
                burgerMenu.classList.remove("menu-btn-ext");
                mobMenu.classList.remove("active");
            }
        });
    });
})();


const accordionItemHeaders = document.querySelectorAll(".menu__child-link");
accordionItemHeaders.forEach(accordionItemHeader => {
accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    
});
});