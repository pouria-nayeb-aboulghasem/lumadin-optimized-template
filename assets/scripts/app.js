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

// home
const vfxOverlay = document.querySelector(".home__overlay--vfx"),
    colorOverlay = document.querySelector(".home__overlay--color"),
    vfxVideo = document.querySelector("#home-vfx"),
    homeColor = document.querySelector("#home-color");


function playAndPauseVideoByMouseMove(selector, video) {
    selector.addEventListener("mouseover", () => {
        video.play();
    });

    selector.addEventListener("mouseleave", () => {
        video.pause();
    });
}

playAndPauseVideoByMouseMove(vfxOverlay, vfxVideo);
playAndPauseVideoByMouseMove(colorOverlay, homeColor);

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
        }
    }
});

// cover
const swiperBgImg = document.querySelector(".swiper-bg-img");

var swiperCoverflow = new Swiper(".cover__swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 35,
        stretch: 10,
        depth: 50,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});

swiperCoverflow.on('slideChangeTransitionEnd', function (e) {
    e.slides.forEach(currentSlide => {
        if (currentSlide.classList.contains("swiper-slide-active")) {
            swiperBgImg.src = `assets/imgs/projects/${currentSlide.dataset.backgroundImage}`;
        }
    });
});

swiperCoverflow.on('slideChange', function (e) {
    e.slides.forEach(currentSlide => {
        if (currentSlide.classList.contains("swiper-slide-active")) {
            swiperBgImg.src = `assets/imgs/projects/${currentSlide.dataset.backgroundImage}`;
        }
    });
});

// news
let swiperNews = new Swiper('.news__swiper', {
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        650: {
            slidesPerView: 2,
            centeredSlides: false
        },
        1100: {
            slidesPerView: 3,
            centeredSlides: false
        }
    }
});
