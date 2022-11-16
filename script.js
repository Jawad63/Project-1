let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

