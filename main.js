
var menu1 = document.querySelector('#menu1');
var menu2 = document.querySelector('#menu2');
var market = document.getElementById("market");
var showmenu = document.querySelector('.showmenu');
var content = document.querySelector('.content');
var slides = document.getElementsByClassName("Slide");
var dots = document.getElementsByClassName("Navdot");
var slideContainer = document.querySelector('.slideContainer');
var current = 0;
var firstIndex = 1;
menu1.addEventListener('click', () => {

    showblock();
})

menu2.addEventListener('click', () => {
    showblock();
})

function closeNav() {
    content.style.display = "block";
    showmenu.style.height = "0%";
}

function showblock() {
    content.style.display = "none";
    showmenu.style.height = "100%";
}


var stringsArray = ["Logitech's", "Canon's", "LJ Hooker's", "Bellamy's", "Nimble's"];
var i = 0;

setInterval(function () {

    market.textContent = stringsArray[i];
    i++;
    if (i == 5) {
        i = 0;
    }
}, 1000);



var slideIndex = 1;


showSlides(slideIndex);
displayNextSlide();

document.querySelector(".prevBtn").addEventListener("click", () => {
    changePrevSlides(-1);
});
document.querySelector(".nextBtn").addEventListener("click", () => {

    changeNextSlides(1);
});




function changeNextSlides(n) {
    showSlides((slideIndex += n));
    displayNextSlide();

}

function changePrevSlides(n) {
    showSlides((slideIndex += n));
    displayPrevSlide();

}

function currentSlide(n) {
    showSlides((slideIndex = n));
    displaySlide();

}

function showSlides(position) {
    var i;

    if (position > slides.length) {
        slideIndex = 1;
        current = slides.length - 1; //current=7
    }
    if (position < 1) {
        slideIndex = slides.length;

    }
    Array.from(slides).forEach(item => (item.style.display = "none"));
    Array.from(dots).forEach(
        item => (item.className = item.className.replace(" selected", ""))
    );

}

function displaySlide() {


    if (slideIndex === firstIndex) {
        slides[slideIndex - 1].style.display = "grid";
    } else {
        let animationFade = "fadeOutRight";
        let animationSlide = "slideInLeft";
        if (slideIndex > firstIndex) {
            animationFade = "fadeOutLeft";
            animationSlide = "slidein";
        }
        slides[firstIndex - 1].style.animationName = animationFade;
        slides[slideIndex - 1].style.animationName = animationSlide;
        slides[firstIndex - 1].style.display = "grid";
        slides[slideIndex - 1].style.display = "grid";
        firstIndex = slideIndex;
    }
    dots[slideIndex - 1].className += " selected";

}



function displayNextSlide() {


    if (slideIndex > 1 || slideIndex == slides.length) {
        slides[slideIndex - 2].style.animationName = "fadeOutLeft";
        slides[slideIndex - 2].style.display = "grid";
        slides[slideIndex - 1].style.animationName = "slidein";
        slides[slideIndex - 1].style.display = "grid";

    } else if (slideIndex == 1 && current == 0) {

        slides[slideIndex - 1].style.display = "grid";

    } else if (slideIndex == 1 && current == slides.length - 1) {
        slides[slides.length - 1].style.animationName = "fadeOutLeft";
        slides[slides.length - 1].style.display = "grid";
        slides[slideIndex - 1].style.animationName = "slidein";
        slides[slideIndex - 1].style.display = "grid";
    }


    dots[slideIndex - 1].className += " selected";
    firstIndex = slideIndex;

}


function displayPrevSlide() {
    if (slideIndex >= 1 && slideIndex < slides.length) {
        slides[slideIndex].style.animationName = "fadeOutRight";
        slides[slideIndex].style.display = "grid";
        slides[slideIndex - 1].style.animationName = "slideInLeft";
        slides[slideIndex - 1].style.display = "grid";
    } 
    else {
        slides[0].style.animationName = "fadeOutRight";
        slides[0].style.display = "grid";
        slides[slideIndex - 1].style.animationName = "slideInLeft";
        slides[slideIndex - 1].style.display = "grid";
    }


    dots[slideIndex - 1].className += " selected";
    firstIndex = slideIndex;


}

