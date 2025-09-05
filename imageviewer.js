const images = [
    'roahos/Screenshot_1.png', 
    'roahos/Screenshot_2.png',
    'roahos/Screenshot_3.png',
    'roahos/Screenshot_4.png',
    'roahos/Screenshot_5.png',
    'roahos/Screenshot_6.png',
    'roahos/Screenshot_7.png',
]; 

let currentIndex = 0;

const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing the card
    showPreviousImage();
});

nextButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing the card
    showNextImage();
});

function showPreviousImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

function showNextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

function updateImage() {
    imageElement.src = images[currentIndex];
}
