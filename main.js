// navigation
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// close navigation
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
