const RATING_ACTIVE_CLASS = 'rating-stars__star--is-selected';

let $ratingComponent = $('.rating-stars'),
    $ratingItem = $('.rating-stars__star');

$ratingComponent.find($ratingItem).on('click', function () {
    let onStar = parseInt($(this).data('value'), 10),
        stars = $(this).parent().children($ratingItem);

    for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass(RATING_ACTIVE_CLASS);
        $(this).parent().attr('data-select', i);
    }

    for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass(RATING_ACTIVE_CLASS);
        $(this).parent().attr('data-select', i);
    }
});
