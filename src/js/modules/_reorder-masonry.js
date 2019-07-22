

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

    // let page = 1;
    let loading = false;

    function scrollToTheBottomHandler() {
        // let newElements = [];

        if($('.reviews__list.more').children().length) {
            if (!loading) {
                if (
                    window.pageYOffset >=
                    reviewsContainer.scrollTop + reviewsContainer.offsetHeight
                ) {
                    page++;
                    loader.style.display = "block";
                    loading = true;
                    setTimeout(function () {
                        var i = 0;
                        $('.reviews__list.temp').empty();
                        $('.reviews__list.more').children().each(function () {
                            if (i >= 10)
                                return;
                            i++;
                            var item = $(this);
                            $('.reviews__list.temp').append(
                                $('<div />')
                                    .attr('class', item.attr('class'))
                                    .html(item.html())
                            );
                            item.remove();
                        });
                        // newElements = Array.prototype.slice.call(
                        //     reviewsTempContainer.cloneNode(true).children
                        // );

                        // reviewsContainer.append(...newElements);
                        // masonry.appended(newElements);
                        loader.style.display = "none";
                        loading = false;
                    }, 1000);
                }
            }
        }
    }

    window.addEventListener("scroll", scrollToTheBottomHandler);
}
