$('[data-fancybox="gallery.album"]').fancybox({
    scrolling: "auto",
    toolbar: false,
    infobar: false,
    smallBtn: true,
    keyboard: true,
    transitionEffect: "fade",
    transitionDuration: 600,
    z: {
        preload: false
    },
    buttons: [
        "zoom",
        "close"
    ],
    btnTpl: {
        smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-close-small button--close" title="{{CLOSE}}">Закрыть' +
            "</button>",

        arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left  button--prev-sm" title="{{PREV}}">' + "</button>",

        arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right button--next-sm" title="{{NEXT}}">' + "</button>",
    },
    protect: true,
    preventCaptionOverlap: true,

    afterShow: function () {
        // let offsetHeight = 0,
        //     imageBottom = 0;
        //
        // let imageHeight = $(".fancybox-image").height(),
        //     captinHeight = $(".fancybox-caption").height(),
        //     contentHeight = $(".fancybox-inner").height(),
        //     stagePosition = $(".fancybox-slide--complete .fancybox-content").position();
        //
        // imageBottom = stagePosition.top + imageHeight;
        // offsetHeight = contentHeight - imageBottom;
        //
        // // $(".fancybox-stage").css({marginTop: captinHeight, marginBottom: captinHeight});
        //
        // $(".fancybox-caption").css({minHeight: offsetHeight});
        // console.log(imageBottom);
        // console.log(stagePosition.top);
        // console.log(offsetHeight);

    },

    mobile: {
        // buttons: [
        //     "zoom",
        //     "close"
        // ],
        toolbar: true,
        infobar: true,
        smallBtn: false,
    }
});
