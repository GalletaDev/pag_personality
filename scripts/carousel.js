let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-image');
const totalSlides = slides.length;

function moveSlide(step) {
    currentIndex += step;

    // Si llegamos al final o al principio, volvemos al inicio o final
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100; // Mover el carrusel para mostrar la imagen correspondiente
    carousel.style.transform = `translateX(${offset}%)`;
}
