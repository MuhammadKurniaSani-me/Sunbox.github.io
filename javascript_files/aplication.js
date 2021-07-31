// theme button setting
document.querySelector(".theme-button").addEventListener("click", ()=> {document.body.classList.toggle("dark")});

// nav links underline setting function
function navbarUnderlineMenu() {
    const section = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links");
    section.forEach(section => {
        section.addEventListener("mouseenter", function() {
            const id = this.getAttribute("id");
            const navActive = document.querySelector(`a[href="#${id}"]`);
            navLinks.forEach(link => link.classList.remove("active"));
            console.log(navActive);
            navActive.classList.add("active");
        });
    });
}
// run the function
navbarUnderlineMenu();
