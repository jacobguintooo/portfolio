AOS.init();

const certImg = document.getElementById("certImage");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.onclick = function () {
    navLinks.classList.toggle("show");
};

certImg.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};