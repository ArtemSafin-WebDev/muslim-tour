selectEventInit = () => {
    let $selectEvent = $('.select-event'),
        $selectEventDropdown = $selectEvent.find('.select-event__select'),
        $selectEventMenu = $selectEvent.find('.select-event__menu');

    let selectEventShow = function (event) {
        $selectEventDropdown.addClass('select-event__select--open');
    };

    let selectEventHide = function () {
        $selectEventDropdown.removeClass('select-event__select--open');
    };

    $selectEventDropdown.find('.select-event__link').click(function (e) {
        selectEventShow();
        e.stopPropagation()
    });

    $(document).click(function () {
        if ($selectEventDropdown.hasClass('select-event__select--open')) {
            selectEventHide()
        } else return
    });
};

selectEventInit();
