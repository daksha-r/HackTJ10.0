const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});



const fileName = document.querySelector(".fileName");

const fileInput = document.querySelector("input[type=file]");
fileInput.addEventListener("change", function() {
    if (this.files && this.files[0]) {
        fileName.innerHTML = this.files[0].name;
    }
});
