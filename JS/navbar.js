let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav__menu");
let dropDownMenu = document.querySelectorAll(".drop-down");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach(function (e) {
    e.addEventListener('click', function() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
});


dropDownMenu.forEach(function(i) {
    let select = i.querySelector('.select');
    let menu = i.querySelector('.menu');
    let menuTwo = i.querySelector('.menu-two')
    let options = i.querySelectorAll('.menu li');

    select.addEventListener('click',  function () {
        select.classList.toggle('select-clicked');
        menu.classList.toggle('menu-open');
        menuTwo.classList.toggle('menu-two');
    });

    options.forEach(function(x) {
        x.addEventListener('click', function() {
            select.classList.remove('select-clicked');
            menu.classList.remove('menu-open');
        });
    });
});

