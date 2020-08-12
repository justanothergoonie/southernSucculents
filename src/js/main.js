console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

let hamburgerButton = document.querySelector('.hamburger');

let navList = document.querySelector('nav');

let toggleNav = function () {
	navList.classList.toggle('showing');
};
hamburgerButton.addEventListener('click', toggleNav);

let dropDownButton = document.querySelector('.plant-dropdown');

let plantList = document.querySelector('.plant-type-list');

let toggleList = function () {
	plantList.classList.toggle('plant-showing');
};
dropDownButton.addEventListener('click', toggleList);
