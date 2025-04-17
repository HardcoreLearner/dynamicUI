const burger = document.querySelector("img");
const menuElems = document.querySelector(".menuItems");

function toggleVisibility() {
    if (menuElems.classList.contains("visible")) {
        menuElems.classList.remove("visible");
    }
    else {
        menuElems.classList.add("visible");
    }  
}

burger.addEventListener("click", toggleVisibility);