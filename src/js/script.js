const getOverlay = document.querySelector(".overlay");
const closeDesktop = document.querySelector(".closeBtnDesktop");
const closeMobile = document.querySelector(".closeBtnMobile");

function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active")
    menu.classList.toggle("active")
};

window.addEventListener("load", () => { setTimeout(() => { getOverlay.classList.add("show"); }, 2000) });
closeDesktop.addEventListener("click", () => { getOverlay.classList.remove("show"); });
closeMobile.addEventListener("click", () => { getOverlay.classList.remove("show"); })
