const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const image5 = document.querySelector(".image5");

const leftArrow = document.querySelector(".leftArrow img");
const rightArrow = document.querySelector(".rightArrow img");

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const circle5 = document.querySelector(".circle5");

function previousImg() {
    const currentImg = document.querySelector(".selectedImg");
    switch(currentImg) {
        case image1:
            currentImg.classList.remove("selectedImg");
            image5.classList.add("selectedImg");
            circle1.classList.remove("selectedCircle");
            circle5.classList.add("selectedCircle");
            break;

        case image2:
            currentImg.classList.remove("selectedImg");
            image1.classList.add("selectedImg");
            circle2.classList.remove("selectedCircle");
            circle1.classList.add("selectedCircle");
            break;

        case image3:
            currentImg.classList.remove("selectedImg");
            image2.classList.add("selectedImg");
            circle3.classList.remove("selectedCircle");
            circle2.classList.add("selectedCircle");
            break;

        case image4:
            currentImg.classList.remove("selectedImg");
            image3.classList.add("selectedImg");
            circle4.classList.remove("selectedCircle");
            circle3.classList.add("selectedCircle");
            break;

        case image5:
            currentImg.classList.remove("selectedImg");
            image4.classList.add("selectedImg");
            circle5.classList.remove("selectedCircle");
            circle4.classList.add("selectedCircle");
            break;
    }
}

function nextImg() {
    const currentImg = document.querySelector(".selectedImg");
    switch(currentImg) {
        case image1:
            currentImg.classList.remove("selectedImg");
            image2.classList.add("selectedImg");
            circle1.classList.remove("selectedCircle");
            circle2.classList.add("selectedCircle");
            break;

        case image2:
            currentImg.classList.remove("selectedImg");
            image3.classList.add("selectedImg");
            circle2.classList.remove("selectedCircle");
            circle3.classList.add("selectedCircle");
            break;

        case image3:
            currentImg.classList.remove("selectedImg");
            image4.classList.add("selectedImg");
            circle3.classList.remove("selectedCircle");
            circle4.classList.add("selectedCircle");
            break;

        case image4:
            currentImg.classList.remove("selectedImg");
            image5.classList.add("selectedImg");
            circle4.classList.remove("selectedCircle");
            circle5.classList.add("selectedCircle");
            break;

        case image5:
            currentImg.classList.remove("selectedImg");
            image1.classList.add("selectedImg");
            circle5.classList.remove("selectedCircle");
            circle1.classList.add("selectedCircle");
            break;
    }
}

leftArrow.addEventListener("click", previousImg);
rightArrow.addEventListener("click", nextImg);

setInterval(nextImg, 5000);
