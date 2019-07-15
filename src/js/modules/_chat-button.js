let $chatBtn = $('.chat-button'),
    chatBtnPosScroll = $(window).scrollTop;

if (chatBtnPosScroll <= 750) {
    $chatBtn.hide();
} else {
    $chatBtn.show();
}
