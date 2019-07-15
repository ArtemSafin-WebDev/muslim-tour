const FIXED_CLASS = 'is-sticky';

elementSticky = (elm, top, left, trigger) => {
    elm.addClass(FIXED_CLASS);
    elm.css({top: top, left: left});
    trigger = true;

    return trigger;
};

cancelSticky = (elm, trigger) => {
    elm.removeAttr('style');
    elm.removeClass(FIXED_CLASS);
    trigger = false;

    return trigger;
};

updatePosition = (elm, top, left) => {
    elm.css({top: top, left: left});
};

fixedButtonInit = () => {
    let $win = $(window),
        $this = $('.tour__section--bron #stickyBtnBron'),
        $thisParent = $this.parent(),

        initialHeight = $('.page-header--tour').height(),

        windowHeight = $win.height(),
        windowWidth = $win.width(),
        topIndent = 22,

        offsetP = $this.offset(),
        heightDelta = Math.abs(windowHeight - initialHeight),
        topDelta = initialHeight - topIndent,
        leftDelta = Math.abs(offsetP.left),

        finishPosition = ($thisParent.offset().top - (windowHeight - heightDelta)),
        stickyTrigger = false;


    // let isLargeHeight = (windowHeight >= heightDelta);

    if ($this.length > 0) {

        $win.ready(() => {
            elementSticky($this, topDelta, leftDelta, stickyTrigger);
        });

        $win.scroll(() => {
            scrollTop = $win.scrollTop();

            if (scrollTop >= 0 && (scrollTop <= finishPosition)) {
                elementSticky($this, topDelta, leftDelta, stickyTrigger);
            } else if (scrollTop >= finishPosition) {
                cancelSticky($this, stickyTrigger);
                // console.log('finish')
            }
        });

        $win.resize(() => {
            elementSticky($this, topDelta, leftDelta, stickyTrigger);
        })
    }
};

tourBorn = $('.tour__section--bron').find("#stickyBtnBron");

if (tourBorn.length) {
    fixedButtonInit();
}

