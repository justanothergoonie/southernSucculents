"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
var hamburgerButton = document.querySelector('.hamburger');
var navList = document.querySelector('nav');

var toggleNav = function toggleNav() {
  navList.classList.toggle('showing');
};

hamburgerButton.addEventListener('click', toggleNav);
var codyMenu = document.querySelector('.cody-menu');
var dropDownButton = document.querySelector('.plant-dropdown');
var colorMenu = document.querySelector('.color-menu');

var toggleList = function toggleList() {
  codyMenu.classList.toggle('open');
};

dropDownButton.addEventListener('click', toggleList);

var toggleColor = function toggleColor() {
  codyMenu.classList.toggle('open-color');
};

colorMenu.addEventListener('click', toggleColor);
//# sourceMappingURL=main.js.map
