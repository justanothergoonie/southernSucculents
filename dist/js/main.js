"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
var hamburgerButton = document.querySelector('.hamburger');
var navList = document.querySelector('nav');

var toggleNav = function toggleNav() {
  navList.classList.toggle('showing');
};

hamburgerButton.addEventListener('click', toggleNav);
var codyMenu = document.querySelector('.cody-menu');
var dropDownButton = document.querySelector('.dropdown');

var toggleList = function toggleList() {
  codyMenu.classList.toggle('open');
};

dropDownButton.addEventListener('click', toggleList);
$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 3,
    dots: true,
    centerMode: true
  });
});
//# sourceMappingURL=main.js.map
