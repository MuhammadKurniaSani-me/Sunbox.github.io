function theme() {
    const themeButton = document.querySelector(".theme-button");
    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark");
    });
}

theme()

function navbarLinkFocus() {
    var navLinks = document.getElementsByClassName("nav-links");
    for (let index = 0; index < navLinks.length; index++) {
        navLinks[index].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].classList.remove("active");
            }
            this.classList.add("active");
        });
        
    }
}

navbarLinkFocus();
