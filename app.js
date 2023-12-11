let button = document.getElementsByClassName("more-prd-btn")[0];
let box5 = document.getElementsByClassName("box-5")[0];
let box6 = document.getElementsByClassName("box-6")[0];
let box7 = document.getElementsByClassName("box-7")[0];
let box8 = document.getElementsByClassName("box-8")[0];
let offerContainer = document.getElementsByClassName("offer-container")[0];
let mainContainer = document.getElementsByClassName("main-container")[0];
let footer = document.getElementsByClassName("footer")[0];
let contactHeading = document.getElementById("contact-heading");


console.log(button);
button.addEventListener("click", function () {
    box5.style.display = "flex";
    box6.style.display = "flex";
    box7.style.display = "flex";
    box8.style.display = "flex";
    offerContainer.style.marginTop = "-50%";
    mainContainer.style.height = "1500px";
    footer.style.top = "390%";
    contactHeading.style.marginTop = "10%";
    // window.scrollTo(0, 500);

});

let currentSlide = 0;
let slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

showSlide(currentSlide);
setInterval(nextSlide, 2000);