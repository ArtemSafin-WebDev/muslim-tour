console.log("Reorder masonry module");

const reviewsContainer = document.querySelector(".reviews__list");

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

    function scrollToTheBottomHandler() {
        let newElements = [];

        if (!loading) {
            if (
                window.pageYOffset >=
                reviewsContainer.scrollTop + reviewsContainer.offsetHeight
            ) {
                page++;
                loader.style.display = "block";
                loading = true;
                setTimeout(function() {
                    newElements = Array.prototype.slice.call(
                        reviewsContainer.cloneNode(true).children
                    );

                    reviewsContainer.append(...newElements);
                    masonry.appended(newElements);
                    loader.style.display = "none";
                    loading = false;
                }, 2000);
            }
        }
    }

    window.addEventListener("scroll", scrollToTheBottomHandler);
}
