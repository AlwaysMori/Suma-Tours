let images = [
    "images/wira.webp",
    "images/sakura.jpg",
    "images/ringgung.jpg",
    "images/nemo.jpg",
];

let currentImageIndex = 0;
const imgElement = document.querySelector(".card img[alt='Tour 1']");

const prevButton = document.getElementById("prevBtn1");
const nextButton = document.getElementById("nextBtn1");

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    imgElement.src = images[currentImageIndex];
}

updateImage();