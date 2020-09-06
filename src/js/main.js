console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

$(document).ready(function () {
	$('.carousel').slick({
		slidesToShow: 3,
		dots: true,
		centerMode: true,
	});
});

let hamburgerButton = document.querySelector('.hamburger');
let navList = document.querySelector('nav');
let toggleNav = function () {
	navList.classList.toggle('showing');
};
hamburgerButton.addEventListener('click', toggleNav);

let codyMenu = document.querySelector('.cody-menu');
let dropDownButton = document.querySelector('.dropdown');

let toggleList = function () {
	codyMenu.classList.toggle('open');
};
dropDownButton.addEventListener('click', toggleList);
