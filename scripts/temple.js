const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const hamburgerMenu = document.querySelector(".hamburgerBtn");
const navigationBar = document.querySelector("nav");
const navItem = document.querySelectorAll(".item");
const mq = window.matchMedia("(min-width: 768px)");


const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.textContent = document.lastModified;

hamburgerMenu.addEventListener("click", function () {
    navItem.forEach(item => {
        if (item.classList.contains("open")) {
            item.classList.replace("open", "close");
        } else {
            item.classList.replace("close", "open");
        }
    })

    if (hamburgerMenu.textContent.includes("☰")) {
        hamburgerMenu.textContent = "✕";
    } else {
        hamburgerMenu.textContent = "☰";
    }


})

mq.addEventListener("change", (e) => {
    if (e.matches) {
        navigationBar.classList.replace("mobileview", "fullview");
        hamburgerMenu.classList.replace("open", "close");
    } else {
        navigationBar.classList.replace("fullview", "mobileview");
        hamburgerMenu.classList.replace("close", "open");
    }
})

