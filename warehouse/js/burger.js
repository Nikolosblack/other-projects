(function () {
  const burgerMenu = document.querySelector(".nav-icon-8");
  const mobMenu = document.querySelector(".nav__bar");

  burgerMenu.addEventListener("click", function (e) {
    this.classList.toggle("open");
    document.body.classList.toggle("lock");
    mobMenu.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".menu__link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
      if (burgerMenu.classList.contains("open")) {
        document.body.classList.remove("lock");
        burgerMenu.classList.remove("open");
        mobMenu.classList.remove("active");
      }
    });
  });
})();
