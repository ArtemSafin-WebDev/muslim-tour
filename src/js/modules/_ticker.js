


let viewportWidth = document.documentElement.clientWidth;
let ticker = document.querySelector(".ticker__text");
let tickerWidth;
let initialShow = true;

if (ticker) {
  function showTicker() {
    var tickerOffsetLeft = ticker.getBoundingClientRect().left;
    tickerWidth = ticker.offsetWidth;
    var duration = tickerWidth / viewportWidth * 10;
    console.log('duration', duration)


    if (initialShow) {
        var tickerInitialSlideWidth = tickerWidth + tickerOffsetLeft;
        console.log("Offset left", tickerOffsetLeft);
        ticker.style.transitionDuration = duration + "s";
        ticker.style.transform =
          "translateX" + "(-" + tickerInitialSlideWidth + "px)";
        initialShow = false;
    } else {
       
   
    }

    setTimeout(showTicker, duration * 1000);
  }

  showTicker();
}
