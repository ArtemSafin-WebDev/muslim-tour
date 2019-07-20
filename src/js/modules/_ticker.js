
let ticker = document.querySelector(".ticker__text");
let initialAnimationPlayed = false;
const animationDuration = 10;


function setAnimationDuration() {
    ticker.style.animationDuration = `${animationDuration}s`;
}


function animateNormally() {
    ticker.addEventListener('animationend', animateNormally)
    ticker.classList.remove('normal-animation');
    setTimeout(function() {
        ticker.classList.add('normal-animation');
    }, 100)   
}


function setAnimation() {
    if (!initialAnimationPlayed) {
        ticker.classList.add('initial-animation');
        initialAnimationPlayed = true;
        const initialAnimationEndHandler = () => {
            ticker.removeEventListener('animationend', initialAnimationEndHandler);
            setAnimation();
        }
        ticker.addEventListener('animationend', initialAnimationEndHandler)
    } else {
        ticker.classList.remove('initial-animation');
        ticker.classList.add('initially-animated');
        animateNormally();
    }
}

if (ticker) {
    setAnimationDuration();

    setAnimation();

}




// let viewportWidth = document.documentElement.clientWidth;
// let ticker = document.querySelector(".ticker__text");
// let tickerWidth;
// let initialShow = true;

// if (ticker) {
//   function showTicker() {
//     var tickerOffsetLeft = ticker.getBoundingClientRect().left;
//     tickerWidth = ticker.offsetWidth;
//     var duration = tickerWidth / viewportWidth * 10;
//     console.log('duration', duration)

//     console.log('Показать тикер')
//     if (initialShow) {
//         var tickerInitialSlideWidth = tickerWidth + tickerOffsetLeft;
//         console.log("Offset left", tickerOffsetLeft);
//         ticker.style.transitionDuration = duration + "s";
//         ticker.style.transform =
//           "translateX" + "(-" + tickerInitialSlideWidth + "px)";
//         initialShow = false;
//     } else {
       
   
//     }

//     setTimeout(showTicker, duration * 1000);
//   }

//   showTicker();
// }
