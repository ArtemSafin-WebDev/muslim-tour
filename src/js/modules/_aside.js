const
    ASIDE__OPEN_CLASS = 'aside--is-open',
    ASIDE_BUTTTON_ACTIVE_CLASS = 'aside__button--is-active';


let $aside = $('.aside'),
    $asideMobBtn = $aside.find('.aside__button');

$asideMobBtn.click(() => {
    $asideMobBtn.toggleClass(ASIDE_BUTTTON_ACTIVE_CLASS);
    $aside.toggleClass(ASIDE__OPEN_CLASS)
});
