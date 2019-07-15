let reviewsSlider = new Swiper('.swiper--reviews .swiper-container', {
    speed: 1000,
    parallax: true,
    loop: true,
    // loop: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let newsSlider = new Swiper('.swiper--news .swiper-container', {
    spaceBetween: 52,
    loop: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            // slidesPerView: 4,
            spaceBetween: 48,
        },
        768: {
            // slidesPerView: 3,
        },
        640: {
            // slidesPerView: 'auto',
            // slidesPerView: 1,
            spaceBetween: 42,
        },
        320: {
            // slidesPerView: 1,
            spaceBetween: 1520
        }
    }
});

let tripsSlider = new Swiper('.swiper--trips .swiper-container', {
    // slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    slidesPerView: 'auto',
    breakpoints: {
        768: {
            // slidesPerView: 2,
        },
        640: {
            // slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let articlesSlider = new Swiper('.swiper--articles .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        640: {
            // slidesPerView: 2,
            spaceBetween: 15,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let videoSliderThumbs = new Swiper('.swiper--video .swiper-thumbs', {
    spaceBetween: 16,
    slidesPerView: 7,
    loop: true,
    freeMode: true,
    loopedSlides: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        640: {
            spaceBetween: 10,
            slidesPerView: 3,
            loopedSlides: 4,
            // slidesPerView: 'auto',
            // slidesPerView: 1,
            // spaceBetween: 42,
        },
    }
});

let videoSliderTop = new Swiper('.swiper--video .swiper-top', {
    speed: 600,
    effect: 'fade',
    spaceBetween: 16,
    load: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {
        swiper: videoSliderThumbs
    }
});

let lettersSlider = new Swiper('.swiper--letters .swiper-container', {
    spaceBetween: 35,
    loop: true,
    speed: 1000,
    effect: 'slide',
    parallax: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1024: {
            // slidesPerView: 4,
            spaceBetween: 48,
        },
        768: {
            // slidesPerView: 3,
        },
        640: {
            // slidesPerView: 'auto',
            // slidesPerView: 1,
            spaceBetween: 24,
        },

    }
});

let sideSlider = new Swiper('.swiper--side .swiper-container', {
    spaceBetween: 24,
    slidesPerView: 1,
    speed: 600,
    parallax: true,
    grabCursor: true,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    slideToClickedSlide: true,
    longSwipes: true,
    longSwipesMs: 600,
    effect: 'fade',
    preventClicksPropagation: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            let indexZero = index + 1;

            if (indexZero < 10) {
                indexZero = '0' + indexZero;
                return '<span class="' + className + '">' + indexZero + '</span>';
            } else {
                return '<span class="' + className + '">' + indexZero + '</span>';
            }
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
