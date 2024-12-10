let currentIndex = 0;
const images = document.querySelectorAll('.slider-images img');
const totalImages = images.length;

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function showImage(index) {
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.slider-images').style.transform = `translateX(${newTransformValue}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    showImage(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    showImage(currentIndex);
});

// Inicializar el slider
showImage(currentIndex);
