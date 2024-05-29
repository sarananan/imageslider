let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
function updateSlidePosition() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    // alert(slider.style.transform)
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    alert(currentIndex)
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}