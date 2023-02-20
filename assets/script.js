const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slidesIndex = 0;
let slidesLength = slides.length;

//Ajout des bullets points au slider
let dots = document.querySelector('.dots')

for(let i = 0; i < slidesLength; i++) {
	if(i == 0) {
		dots.innerHTML += `<div class="dot dot_selected"></div>`;
	} else {
		dots.innerHTML += `<div class="dot"></div>`;
	}
};

const dot = document.querySelectorAll('.dot');
const dotLength = dot.length;

//variable ecouteur d'événement
let tagline = document.querySelector("#banner p");
let img = document.querySelector(".img");
let url = "./assets/images/slideshow/";

//ecouteur d'événement au click pour la fléche de droite :
document
	.querySelector('.arrow_right')
	.addEventListener("click", function() {
		if(slidesIndex == slidesLength - 1) {
			slidesIndex = 0
			dot[slidesIndex].classList.add('dot_selected')
			dot[slidesLength - 1].classList.remove('dot_selected')
		} else {
			slidesIndex ++
			dot[slidesIndex].classList.add('dot_selected')
			dot[slidesIndex - 1].classList.remove('dot_selected')
		}
		
		img.src = url + slides[slidesIndex].image;
		tagline.innerHTML = slides[slidesIndex].tagLine;
	});

//ecouteur d'événement au click pour la fléche de gauche :
document
	.querySelector('.arrow_left')
	.addEventListener('click', function() {
		if(slidesIndex == 0) {
			slidesIndex = slidesLength - 1
			dot[slidesIndex].classList.add('dot_selected')
			dot[0].classList.remove('dot_selected')
		} else {
			slidesIndex --
			dot[slidesIndex].classList.add('dot_selected')
			dot[slidesIndex + 1].classList.remove('dot_selected')
		}
		
		img.src = url + slides[slidesIndex].image;
		tagline.innerHTML = slides[slidesIndex].tagLine;
	});