const hamburgerActive = document.querySelector(".hamburger");
console.log(hamburgerActive);
const navMenu = document.querySelector(".nav-menu");

hamburgerActive.addEventListener("click", () => {
    hamburgerActive.classList.toggle("active"); 
    navMenu.classList.toggle("tendina");
});




document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburgerActive.classList.remove("active")
        navMenu.classList.remove("tendina")
    })); 