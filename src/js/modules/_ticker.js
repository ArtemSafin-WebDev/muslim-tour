let tickerContainerWidth = $('.ticker').width(),
    tickerWidth = $('.ticker__text').width(),
    left = tickerWidth;


tickerText = function () {
    if (--left < -tickerWidth) {
        left = tickerContainerWidth;
    }

    $(".ticker__text").css("margin-left", left + "px");

    setTimeout(tickerText, 8);
};


tickerText();
