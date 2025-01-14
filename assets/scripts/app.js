// header and nav
const menuRowLg = document.querySelector(".menu__row--lg"),
    menuRowSm = document.querySelector(".menu__row--sm"),
    menuToggle = document.querySelector(".menu__toggle"),
    menuIcon = document.querySelector("#menu-icon"),
    header = document.querySelector(".header");

let toggleClose = false;
menuToggle.addEventListener("click", () => {
    menuRowLg.classList.toggle("active");
    header.classList.toggle("active");
    menuRowSm.classList.toggle("active");

    menuIcon.className = toggleClose ? "ri-layout-grid-fill" : "ri-close-large-line";
    toggleClose = !toggleClose;
});

const bgHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader);

// work
let swiperFeatured = new Swiper('.work__swiper', {
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        1100: {
            slidesPerView: 4,
            centeredSlides: false
        },
        1367: {
            slidesPerView: 3,
            centeredSlides: false
        }
    }
});