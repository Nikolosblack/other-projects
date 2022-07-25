(function() {
	const burgerMenu = document.querySelector('.burger-menu');
    const burgerLine = document.querySelector('.burger-menu span');
	const mobMenu = document.querySelector('.nav__bar');
    const logo = document.querySelector('.logo');

	burgerMenu.addEventListener('click', function(e) {
		this.classList.toggle("close");
		document.body.classList.toggle("lock");
		mobMenu.classList.toggle("active");
        logo.classList.toggle("color--light");
        burgerLine.classList.toggle("background--light");
	});


	const navLinks = document.querySelectorAll(".menu__link");
	navLinks.forEach((navLink) => {
		navLink.addEventListener("click", (_) => {
			if (burgerMenu.classList.contains("close")) {
				document.body.classList.remove("lock");
				burgerMenu.classList.remove("close");
				mobMenu.classList.remove("active");
			}
		});
	});

})();