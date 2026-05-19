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

// back to top button
const topCta = document.querySelector('#topCta');

window.addEventListener("scroll", () => {
    // if else
    if (window.scrollY > 300) {
        topCta.classList.add("active");
    } else {
        topCta.classList.remove("active");
    }
});

topCta.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
