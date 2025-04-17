const tabs = document.querySelectorAll(".tabs");

function toggleTabSelected(e) {
    const selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    this.classList.add("selected");
}

tabs.forEach(tab => tab.addEventListener("click", toggleTabSelected));