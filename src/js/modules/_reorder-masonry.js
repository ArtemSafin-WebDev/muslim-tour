console.log("Reorder masonry module");

const reviewsContainer = document.querySelector(".reviews__list");

if (reviewsContainer) {
    const masonry = new Masonry(reviewsContainer, {
        itemSelector: ".reviews__item",
        percentPosition: true
    });

    const loader = document.querySelector('.reviews__more');

    imagesLoaded(reviewsContainer).on("progress", function() {
        masonry.layout();
    });

    let page = 1;

    function scrollToTheBottomHandler() {
        let newElements = [];
        if (
            window.innerHeight + window.pageYOffset >=
            document.body.offsetHeight - 2
        ) {
            console.log('Scrolled to the bottom')
            page++;
            loader.style.display = 'block';
            setTimeout(function() {
                console.log('Timeout function executed')
                newElements = Array.from(reviewsContainer.cloneNode(true).children);
                console.log('New elements', newElements)
                reviewsContainer.append(...newElements);
                masonry.appended(newElements);
                loader.style.display = 'none';
            }, 2000);
        }
    }

    window.addEventListener('scroll', scrollToTheBottomHandler);
}
