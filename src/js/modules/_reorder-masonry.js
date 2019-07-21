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
        console.log(loading);
        console.log(window.pageYOffset)
        console.log(reviewsContainer.scrollTop + reviewsContainer.offsetHeight)
        if (!loading) {
            if (
                window.pageYOffset >=
                reviewsContainer.scrollTop + reviewsContainer.offsetHeight
            ) {
                console.log("Scrolled to the bottom");
                page++;
                loader.style.display = "block";
                loading = true;
                setTimeout(function() {
                    console.log("Timeout function executed");
                    newElements = Array.from(
                        reviewsContainer.cloneNode(true).children
                    );
                    console.log("New elements", newElements);
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
