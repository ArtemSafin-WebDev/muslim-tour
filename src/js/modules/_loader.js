loaderInit = () => {
    const LOADER_SHOW_CLASS = "loader--open";

    let $loader = $('.loader'),
        $loaderTrigger = false,
        loaderInner = '<div class="loader"><svg><use xlink:href="#icn-logo"></use></svg></div>';


    loaderAppend = () => {
        $('body').append(loaderInner);
    };

    loaderRemove = () => {
        $('body').find($loader).remove();
    };

    loaderShow = () => {
        if (!$loaderTrigger) {
            $loader.addClass(LOADER_SHOW_CLASS);
            $loaderTrigger = true;
            
        } else return false
    };

    loaderHide = () => {
        $loader.removeClass(LOADER_SHOW_CLASS);
        $loaderTrigger = false;
    };

    $loader.click(function () {
        setTimeout(loaderHide, 800);
    });
};

loaderInit();

// $(window).on('load', () => {
//     loaderShow();
//
//     setTimeout(() => {
//         loaderHide()
//     }, 1800);
// });

