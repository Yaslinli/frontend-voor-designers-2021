let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.getElementById('carousel__button--next')
    .addEventListener("click", function () {
        moveToNextSlide();
    });

document.getElementById('carousel__button--prev')
    .addEventListener("click", function () {
        moveToPrevSlide();
    });

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden')
    }
    slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37) {
      moveToPrevSlide();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.keyCode == 39) {
      moveToNextSlide();
    }
  });var todayRaw = new Date();

//   counter homepage
var todayYY = todayRaw.getFullYear();
var todayMM = todayRaw.getMonth();
var todayDD = todayRaw.getDate();
var today = new Date(todayYY, todayMM, todayDD);
var beginning = new Date(2018, 07, 10); //YYYY, MM, DD //month counts from 00 i.e may = 04 not 05
//var today = today.getTime();        // It seems you do not need this...? //
//var incident = incident.getTime();  //                                   //

var difference = Math.round((today - beginning)/(1000*60*60*24));
document.querySelector('#days').innerHTML = difference;// JavaScript Document



