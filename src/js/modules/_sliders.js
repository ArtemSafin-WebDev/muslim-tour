let reviewsSlider = new Swiper(".swiper--reviews .swiper-container", {
    speed: 1000,
    parallax: true,
    loop: true,

    slidesPerView: "auto",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

const newsSliderContainers = Array.prototype.slice.call(
    document.querySelectorAll(".swiper--news .swiper-container")
);

newsSliderContainers.forEach(newsSliderContainer => {
    const slideCount = Array.prototype.slice.call(
        newsSliderContainer.querySelectorAll(".swiper-slide")
    ).length;
    const options = {
        spaceBetween: 52,
        loop: false,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1024: {
                spaceBetween: 48
            },
            768: {},
            640: {
                spaceBetween: 42
            },
            320: {
                spaceBetween: 1520
            }
        }
    };

    if (slideCount > 2) {
        options.loop = true;
    }

    new Swiper(newsSliderContainer, options);
});

const tripsSliderContainers = Array.prototype.slice.call(
    document.querySelectorAll(".swiper--trips .swiper-container")
);

tripsSliderContainers.forEach(tripsSliderContainer => {
    const slideCount = Array.prototype.slice.call(
        tripsSliderContainer.querySelectorAll(".swiper-slide")
    ).length;
    const options = {
        spaceBetween: 24,
        loop: false,
        slidesPerView: "auto",
        breakpoints: {
            768: {
            },
            640: {
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    };
    if (slideCount > 2) {
        options.loop = true;
    }

    new Swiper(tripsSliderContainer, options);
});

const articlesSliderContainers = Array.prototype.slice.call(
    document.querySelectorAll(".swiper--articles .swiper-container")
);

articlesSliderContainers.forEach(articlesSliderContainer => {
    const slideCount = Array.prototype.slice.call(
        articlesSliderContainer.querySelectorAll(".swiper-slide")
    ).length;
    const options = {
        slidesPerView: "auto",
        spaceBetween: 24,
        loop: false,
        breakpoints: {
            640: {
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    };
    if (slideCount > 2) {
        options.loop = true;
    }

    new Swiper(articlesSliderContainer, options);
});

const videoSliders = Array.prototype.slice.call(
    document.querySelectorAll(".swiper--video")
);

videoSliders.forEach(video => {
    let videoSliderThumbs = new Swiper(video.querySelector(".swiper-thumbs"), {
        spaceBetween: 16,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            640: {
                spaceBetween: 10,
                slidesPerView: 3
            }
        }
    });

    new Swiper(video.querySelector(".swiper-top"), {
        speed: 600,
        effect: "fade",
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        thumbs: {
            swiper: videoSliderThumbs
        }
    });
});

const letterSliderContainers = Array.prototype.slice.call(
    document.querySelectorAll("..swiper--letters .swiper-container")
);

letterSliderContainers.forEach(lettersSliderContainer => {
    const slideCount = Array.prototype.slice.call(
        lettersSliderContainer.querySelectorAll(".swiper-slide")
    ).length;

    const options = {
        spaceBetween: 35,
        loop: false,
        speed: 1000,
        effect: "slide",
        parallax: true,
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1024: {
                spaceBetween: 48
            },
            768: {},
            640: {
                spaceBetween: 24
            }
        }
    };

    if (slideCount > 2) {
        options.loop = true;
    }

    new Swiper(lettersSliderContainer, options);
});

const sideSwiperContainers = Array.prototype.slice.call(
    document.querySelectorAll(".swiper--side .swiper-container")
);

sideSwiperContainers.forEach(sideSwiperContainer => {
    const slideCount = Array.prototype.slice.call(
        sideSwiperContainer.querySelectorAll(".swiper-slide")
    ).length;

    const options = {
        spaceBetween: 24,
        slidesPerView: 1,
        speed: 600,
        parallax: true,
        grabCursor: true,
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        slideToClickedSlide: true,
        longSwipes: true,
        longSwipesMs: 600,
        autoHeight: true,
        effect: "fade",
        preventClicksPropagation: false
    };

    if (slideCount >= 2) {
        options.pagination = {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                let indexZero = index + 1;

                if (indexZero < 10) {
                    indexZero = "0" + indexZero;
                    return (
                        '<span class="' +
                        className +
                        '">' +
                        indexZero +
                        "</span>"
                    );
                } else {
                    return (
                        '<span class="' +
                        className +
                        '">' +
                        indexZero +
                        "</span>"
                    );
                }
            }
        };
        options.navigation = {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        };
    } else {
        sideSwiperContainer.querySelector(".swiper-button-next").style.display =
            "none";
        sideSwiperContainer.querySelector(".swiper-button-prev").style.display =
            "none";
    }

    new Swiper(sideSwiperContainer, options);
});
