(function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links__mob");
    const links = document.querySelectorAll(".nav-links__mob li");
    const lockbody = document.querySelector("body")
    hamburger.addEventListener("click", function(e) {
        // add overflow:hidden to body
        lockbody.classList.toggle("lock");
        //Hamburger Animation
        hamburger.classList.toggle("toggle");
        //opacity to li - Animate Links
        navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
            });
    });
}
)();
