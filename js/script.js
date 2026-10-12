/* =========================
   CINE MINI HERO SLIDER
========================= */

const slides = document.querySelectorAll(".hero-slide");
const thumbnails = document.querySelectorAll(".thumbnail");
const dots = document.querySelectorAll(".dot");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;
let autoSlide;


/* =========================
   SHOW SLIDE
========================= */

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    } 
    else if (index < 0) {
        currentSlide = slides.length - 1;
    } 
    else {
        currentSlide = index;
    }


    /* Remove active */

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });


    /* Add active */

    slides[currentSlide].classList.add("active");

    thumbnails[currentSlide].classList.add("active");

    dots[currentSlide].classList.add("active");
}


/* =========================
   NEXT
========================= */

function nextSlide() {

    showSlide(currentSlide + 1);

    restartAutoSlide();
}


/* =========================
   PREVIOUS
========================= */

function previousSlide() {

    showSlide(currentSlide - 1);

    restartAutoSlide();
}


/* =========================
   BUTTON EVENTS
========================= */

nextBtn.addEventListener("click", nextSlide);

previousBtn.addEventListener("click", previousSlide);


/* =========================
   THUMBNAIL EVENTS
========================= */

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

        const slideNumber =
            Number(thumbnail.dataset.slide);

        showSlide(slideNumber);

        restartAutoSlide();

    });

});


/* =========================
   DOT EVENTS
========================= */

dots.forEach((dot) => {

    dot.addEventListener("click", () => {

        const slideNumber =
            Number(dot.dataset.slide);

        showSlide(slideNumber);

        restartAutoSlide();

    });

});


/* =========================
   AUTOMATIC SLIDER
========================= */

function startAutoSlide() {

    autoSlide = setInterval(() => {

        showSlide(currentSlide + 1);

    }, 5000);

}


/* =========================
   RESTART TIMER
========================= */

function restartAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();

}


/* START */

showSlide(0);

startAutoSlide();