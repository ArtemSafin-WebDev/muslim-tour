const SCROLL_HIDE = 'scroll-hide';
const BLUR_CONTENT = 'is-blur';

let $header = $('.header'),
    $headerMenuBtn = $('.header__button'),
    $headerMenuLink = $('.header__menu a'),
    $mainMenu = $('.main-menu'),
    $mainMenuClose = $('.main-menu__back'),
    $mobMenu = $('.mobile-menu'),
    $mobHeaderBottomMenu = $('.menu-line'),
    mainMenuTrigger = false,
    mobMenuTrigger = false;

bodyScrollHide = () => {
    $('html').addClass(SCROLL_HIDE);
};

bodyScrollAuto = () => {
    $('html').removeClass(SCROLL_HIDE);
};

mainMenuShow = (link) => {
    $header.addClass('header--is-open-menu');
    if(link)
        $(link.attr('href')).addClass('main-menu--is-show');
    else
        $mainMenu.addClass('main-menu--is-show');
    mainMenuTrigger = true;

    $('body').addClass(BLUR_CONTENT);
    return true;
};

mainMenuHide = () => {
    $header.removeClass('header--is-open-menu');
    $mainMenu.removeClass('main-menu--is-show');
    mainMenuTrigger = false;

    $('body').removeClass(BLUR_CONTENT);
    return false;
};

mobMenuShow = () => {
    $header.addClass('header--is-open-menu');
    $headerMenuBtn.addClass('header__button--is-active');
    $mobMenu.addClass('mobile-menu--is-show');
    mobMenuTrigger = true;

    bodyScrollHide();
    return true;
};

mobMenuHide = () => {
    $header.removeClass('header--is-open-menu');
    $headerMenuBtn.removeClass('header__button--is-active');
    $mobMenu.removeClass('mobile-menu--is-show');

    mobMenuTrigger = false;

    bodyScrollAuto();
    return false;
};

checkMenuTrigger = (type, link) => {
    if (type) {
        if (!mobMenuTrigger) {
            mobMenuShow();
        } else {
            mobMenuHide();
        }
    } else if (!type) {
        if (!mainMenuTrigger) {
            mainMenuShow(link);
        } else {
            mainMenuHide();
        }
    }
};

$headerMenuBtn.click(function () {
    checkMenuTrigger(true, false);
});

$headerMenuLink.click(function () {
    checkMenuTrigger(false, $(this));
});

$mainMenuClose.click(function () {
    mainMenuHide();
});

$mobMenu.find('.mobile-menu__item--sub').click(function () {
    if ($(this).hasClass('mobile-menu__item--sub-open')) {
        $(this).removeClass('mobile-menu__item--sub-open')
    } else {
        $(this).addClass('mobile-menu__item--sub-open')
    }
});

$mobHeaderBottomMenu.find('.menu-line__link').click(function (event) {
    event.preventDefault();
    $mobHeaderBottomMenu.find('.menu-line__bottom').hide();
    $mobHeaderBottomMenu.find('.menu-line__link').removeClass('menu-line__link--is-active');
    $(this).addClass('menu-line__link--is-active');
    $mobHeaderBottomMenu.find('.menu-line__bottom[data-name="' + $(this).data('target_name') + '"]').show();
});

$('.dv__header-menu a[href^="#"]').click(function(e){
    e.preventDefault();

    var link = $(this);
    $(link.attr('href')).addClass("active");
    $(".dv__blur").addClass("active");
    $("body").css("overflow", "hidden");
});

$('.dv__popup-back').click(function(){
    $(this).parent().removeClass("active");
    $(".dv__blur").removeClass("active");
    $("body").css("overflow", "auto");
});

function openDVPopup (index) {
    $("*[data-popup=\""+index+"\"]").addClass("active");
    $(".dv__blur").addClass("active");
    $("body").css("overflow", "hidden");
}

function closeDVPopup (t) {
    var elem = $(t).closest("[data-popup]");
    elem.removeClass("active");
    $(".dv__blur").removeClass("active");
    $("body").css("overflow", "auto");
}