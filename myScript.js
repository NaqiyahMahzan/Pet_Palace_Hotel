var slideIndex = 0;
var slideshowTimeout;

showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slideshowTimeout = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];

slideshowContainer.addEventListener("mouseenter", function () {
    clearTimeout(slideshowTimeout);
});

slideshowContainer.addEventListener("mouseleave", function () {
    slideshowTimeout = setTimeout(showSlides, 2000);
});