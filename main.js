//navbar
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}


//search
document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active")
}

document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active")
}


//swiper
const images = document.querySelectorAll(".image-container ");

let i = 0; // current slide
let j = 3; // total slides

function next() {
    document.getElementById("content" + (i + 1)).classList.remove("displayed");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("displayed");
    indicator(i + 1);
}

function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("displayed");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("displayed");
    indicator(i + 1);
}

