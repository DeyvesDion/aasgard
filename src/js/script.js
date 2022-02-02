// Declaration des variables
const getOverlay = document.querySelector(".overlay");
const closeDesktop = document.querySelector(".closeBtnDesktop");
const closeMobile = document.querySelector(".closeBtnMobile");

window.addEventListener("scroll", () => {
    // fonction menu sticky
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    // Fonction toogle float-img
    const ShowImgToggle = document.querySelector(".float-img");
    ShowImgToggle.classList.toggle("show-img", window.scrollY >= 0)
});

// Fonction toogle menu
function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active")
    menu.classList.toggle("active")
};
// fonction pour definir le delais de overlay
window.addEventListener("load", () => { setTimeout(() => { getOverlay.classList.add("show"); }, 2000) });
closeDesktop.addEventListener("click", () => { getOverlay.classList.remove("show"); });
closeMobile.addEventListener("click", () => { getOverlay.classList.remove("show"); })