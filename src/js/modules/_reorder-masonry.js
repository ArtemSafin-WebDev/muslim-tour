const reviewsContainer = document.querySelector(".reviews__list.main");
const reviewsTempContainer = document.querySelector(".reviews__list.temp");
const reviewsMoreContainer = document.querySelector(".reviews__list.more");

if (reviewsContainer) {
    const masonry = new Masonry(reviewsContainer, {
        itemSelector: ".reviews__item",
        percentPosition: true
    });

    const loader = document.querySelector(".reviews__more");

    imagesLoaded(reviewsContainer).on("progress", function() {
        masonry.layout();
    });

    let page = 1;
    let loading = false;
    const uploadAtOnce = 10;
    const reviewsToAdd = Array.prototype.slice.call(
        document.querySelector(".reviews__list.more").children
    );
    
    function scrollToTheBottomHandler() {
        const reviewsLeft = reviewsToAdd.length - ((page - 1) * uploadAtOnce);
       
        if (!loading && reviewsLeft > 0) {
            if (
                window.pageYOffset >=
                reviewsContainer.scrollTop + reviewsContainer.offsetHeight
            ) {
                loader.style.display = "block";
                loading = true;
                setTimeout(function() {
                    const startIndex = (page - 1) * uploadAtOnce;
                    let endIndex = page * uploadAtOnce;
                    if (endIndex > reviewsToAdd.length + 1) {
                        endIndex = reviewsToAdd.length + 1;
                    }
                    const newElements = reviewsToAdd.slice(startIndex, endIndex);
                    reviewsContainer.append(...newElements);
                    masonry.appended(newElements);
                    page++;
                    loader.style.display = "none";
                    loading = false;
                }, 1000);
            }
        }
    }

    window.addEventListener("scroll", scrollToTheBottomHandler);
}
