// For Roahos //
const images1 = [
    'roahos/Screenshot_1.png',
    'roahos/Screenshot_2.png',
    'roahos/Screenshot_3.png',
    'roahos/Screenshot_4.png',
    'roahos/Screenshot_5.png',
    'roahos/Screenshot_6.png',
    'roahos/Screenshot_7.png',
    
];

let currentIndex1 = 0;

const imageElement1 = document.getElementById('image1');
const prevButton1 = document.getElementById('prev1');
const nextButton1 = document.getElementById('next1');
const dialog1 = document.getElementById('imageViewerDialog1');
const openButton1 = document.getElementById('openViewer1');
const closeButton1 = document.getElementById('closeViewer1');

openButton1.addEventListener('click', () => {
    dialog1.showModal();
    updateImage1();
});

closeButton1.addEventListener('click', () => {
    dialog1.close();
});

prevButton1.addEventListener('click', (event) => {
    event.stopPropagation();
    showPreviousImage1();
});

nextButton1.addEventListener('click', (event) => {
    event.stopPropagation();
    showNextImage1();
});

function showPreviousImage1() {
    currentIndex1 = (currentIndex1 === 0) ? images1.length - 1 : currentIndex1 - 1;
    updateImage1();
}

function showNextImage1() {
    currentIndex1 = (currentIndex1 === images1.length - 1) ? 0 : currentIndex1 + 1;
    updateImage1();
}

function updateImage1() {
    imageElement1.src = images1[currentIndex1];
}

// For hyprland
const images2 = [
    'hyprland/startup.png',
    'hyprland/neofetch.png',
    'hyprland/processes.png',
    'hyprland/waybar.png',
];
let currentIndex2 = 0;

const imageElement2 = document.getElementById('image2');
const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');
const dialog2 = document.getElementById('imageViewerDialog2');
const openButton2 = document.getElementById('openViewer2');
const closeButton2 = document.getElementById('closeViewer2');

openButton2.addEventListener('click', () => {
    dialog2.showModal();
    updateImage2();
});

closeButton2.addEventListener('click', () => {
    dialog2.close();
});

prevButton2.addEventListener('click', (event) => {
    event.stopPropagation();
    showPreviousImage2();
});

nextButton2.addEventListener('click', (event) => {
    event.stopPropagation();
    showNextImage2();
});

function showPreviousImage2() {
    currentIndex2 = (currentIndex2 === 0) ? images2.length - 1 : currentIndex2 - 1;
    updateImage2();
}

function showNextImage2() {
    currentIndex2 = (currentIndex2 === images2.length - 1) ? 0 : currentIndex2 + 1;
    updateImage2();
}

function updateImage2() {
    imageElement2.src = images2[currentIndex2];
}

// For wifi script
let currentIndex3 = 0;

const imageElement3 = document.getElementById('image3');
const dialog3 = document.getElementById('imageViewerDialog3');
const openButton3 = document.getElementById('openViewer3');
const closeButton3 = document.getElementById('closeViewer3');

openButton3.addEventListener('click', () => {
    dialog3.showModal();
    updateImage3();
});

closeButton3.addEventListener('click', () => {
    dialog3.close();
});


