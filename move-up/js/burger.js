(function() {
	const burgerMenu = document.querySelector('.burger-menu');
	const mobMenu = document.querySelector('.mobile__menu__wrapper')

	burgerMenu.addEventListener('click', function(e) {
		this.classList.toggle("close");
		document.body.classList.toggle("lock");
		mobMenu.classList.toggle("active")
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
