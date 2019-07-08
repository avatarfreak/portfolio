const main_body = document.getElementById('main');
const checkbox = document.getElementById("nav-toggle");
const nav = document.getElementById("navbar");

nav.addEventListener("click", () => {
    checkbox.checked = false;
});