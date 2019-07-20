function showElem(obj) {
    obj.forEach(function (elm) {
        elm.show();
    })
}

function hideElem(obj) {
    obj.forEach(function (elm) {
        elm.hide();
    })
}

function isShowHideElements(forShow, forHide) {
    showElem(forShow);
    hideElem(forHide);
}

function calcBytes(value) {
    if (value >= 1048576) {
        return Math.floor(value / 1024 / 1024) + "Mb";
    } else if (value >= 1024) {
        return Math.floor(value / 1024) + "Kb";
    } else if (value < 1024) {
        return Math.floor(value) + "Byte";
    }
}

function moveElementUp(item) {
    let prev = item.prev();

    if (prev.length == 0) return;

    prev.css('z-index', 999).css('position', 'relative').animate({top: item.height()}, 250);
    item.css('z-index', 1000).css('position', 'relative').animate({top: '-' + prev.height()}, 300, function () {
        prev.css('z-index', '').css('top', '').css('position', '');
        item.css('z-index', '').css('top', '').css('position', '');
        item.insertBefore(prev);
    });
}

function moveElementDown(item) {
    let next = item.next();

    if (next.length == 0) return;

    next.css('z-index', 999).css('position', 'relative').animate({top: '-' + item.height()}, 250);
    item.css('z-index', 1000).css('position', 'relative').animate({top: next.height()}, 300, function () {
        next.css('z-index', '').css('top', '').css('position', '');
        item.css('z-index', '').css('top', '').css('position', '');
        item.insertAfter(next);
    });
}

(function(){
    var dvTimeoutAnim, dvTimeoutAnimBg;

    $(".dv__tabs span:not(.active)").click(function(e){
        e.preventDefault();
        var id = parseInt($(this).attr("data-id"));
        $(".dv__select-wrap.view").removeClass("view");
        $(".dv__select-wrap[data-id=\""+id+"\"]").addClass("view");

        $(".dv__f-window.active, .dv__f-tabs span.active").removeClass("active");
        $(".dv__f-window[data-id=\""+id+"\"], .dv__f-tabs span[data-id=\""+id+"\"]").addClass("active");

        var text = $(this).text();
        $("span:nth-child(2)", $(this).closest(".dv__tabs")).text($("span:nth-child(1)", $(this).closest(".dv__tabs")).text());
        $("span:nth-child(1)", $(this).closest(".dv__tabs")).text(text);
        if (id == "1") {
            $("span:nth-child(1)", $(this).closest(".dv__tabs")).attr("data-id", "1");
            $("span:nth-child(2)", $(this).closest(".dv__tabs")).attr("data-id", "2");
        } else {
            $("span:nth-child(1)", $(this).closest(".dv__tabs")).attr("data-id", "2");
            $("span:nth-child(2)", $(this).closest(".dv__tabs")).attr("data-id", "1");
        }
        $(".dv__windows ul.active", $(this).closest(".dv__inside--cell")).removeClass("active");
        $(".dv__windows ul[data-id=\""+id+"\"]", $(this).closest(".dv__inside--cell")).addClass("active");
        $(this).closest(".dv__inside--cell").addClass("anim").delay(50).queue(function(next){
            $(this).removeClass("anim");
            next();
        });

        dvTimeoutAnim = setTimeout(function(){
            var v1 = $(".dv__bg video:nth-child(1)");
            var v2 = $(".dv__bg video:nth-child(2)");
            var v3 = $(".dv__inside--video-wrap video:nth-child(1)");
            var v4 = $(".dv__inside--video-wrap video:nth-child(2)");

            if (id == 1) {
                v1.addClass("active");
                v2.removeClass("active");
                v3.addClass("active");
                v4.removeClass("active");
                // v1[0].play();
                // v2[0].pause();
                // v3[0].play();
                // v4[0].pause();
            } else {
                v2.addClass("active");
                v1.removeClass("active");
                v4.addClass("active");
                v3.removeClass("active");
                // v2[0].play();
                // v1[0].pause();
                // v4[0].play();
                // v3[0].pause();
            }

            clearTimeout(dvTimeoutAnim);
        }, 50);
    });

    $(".dv_sm li div").click(function(e){
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            var index = $(".dv_sm li").index($(this).closest("li")[0]);
            $(".dv_sm li").removeClass("active");
            $(this).closest("li").addClass("active");
            $(".dv_sm").css("margin-top", (-index*40)+"px");
            $("b", $(this).closest(".dv__select-wrap.dv__static")).text($(this).text());

            dvTimeoutAnimBg = setTimeout(function(){
                $("#mainBg").click();
                clearTimeout(dvTimeoutAnimBg);
            }, 200);
        }
    });


    $("#mainBg").click(function(e){
        e.preventDefault();
        $(".dv_sm, .dv__select-wrap.dv__static, #mainBg").removeClass("active");
        var index = $(".dv_sm li").index($(".dv_sm li.active")[0]);
        $.each($(".dv_sm li"), function(i){
            var d = index - i;
            $(this).css("transform", "translateY("+(40*d)+"px)");
        });
    });

    $(".dv__select-wrap.dv__static").click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')) {
            $(this).addClass("active");
            $("#mainBg").addClass("active");
            $(".dv_sm li").css("transform", "translateY(" + (0) + "px)");
        }
        else {
            $(this).removeClass("active");
            $("#mainBg").removeClass("active");
        }
    });

    $(".dv__f-tabs span").click(function(e){
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            var id = $(this).attr("data-id");
            $(".dv__f-tabs span.active").removeClass("active");
            $(this).addClass("active");
            $(".dv__f-window.active").removeClass("active");
            $(".dv__f-window[data-id=\""+id+"\"]").addClass("active");

            $(".dv__select-wrap.view").removeClass("view");
            $(".dv__select-wrap[data-id=\""+id+"\"]").addClass("view");
            var text = $(this).text();
            $(".dv__tabs span:nth-child(2)").text($(".dv__tabs span:nth-child(1)").text());
            $(".dv__tabs span:nth-child(1)").text(text);
            if (id == "1") {
                $(".dv__tabs span:nth-child(1)").attr("data-id", "1");
                $(".dv__tabs span:nth-child(2)").attr("data-id", "2");
            } else {
                $(".dv__tabs span:nth-child(1)").attr("data-id", "2");
                $(".dv__tabs span:nth-child(2)").attr("data-id", "1");
            }
            $(".dv__inside--cell .dv__windows ul.active").removeClass("active");
            $(".dv__inside--cell .dv__windows ul[data-id=\""+id+"\"]").addClass("active");

            var v1 = $(".dv__bg video:nth-child(1)");
            var v2 = $(".dv__bg video:nth-child(2)");
            var v3 = $(".dv__inside--video-wrap video:nth-child(1)");
            var v4 = $(".dv__inside--video-wrap video:nth-child(2)");

            if (id == 1) {
                v1.addClass("active");
                v2.removeClass("active");
                v3.addClass("active");
                v4.removeClass("active");
                // v1[0].play();
                // v2[0].pause();
                // v3[0].play();
                // v4[0].pause();
            } else {
                v2.addClass("active");
                v1.removeClass("active");
                v4.addClass("active");
                v3.removeClass("active");
                // v2[0].play();
                // v1[0].pause();
                // v4[0].play();
                // v3[0].pause();
            }
        }
    });

    $(".dv__burger").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".dv__blur").removeClass("active");
            $("body").css("overflow", "auto");
            $("html").css("overflow", "auto");
            $(".dv__mob-menu").removeClass("active");
        } else {
            $(this).addClass("active");
            $(".dv__blur").addClass("active");
            $("body").css("overflow", "hidden");
            $("html").css("overflow", "hidden");
            $(".dv__mob-menu").addClass("active");
        }
    });

    $("li.dv__more > a").click(function(e){
        e.preventDefault();
        var m = $(this).closest(".dv__more");
        if (m.hasClass("active")) {
            m.removeClass("active");
            $("> ul", m).slideUp(250);
        } else {
            m.addClass("active");
            $("> ul", m).slideDown(250);
        }
    });

    $(document).ready(function(){
        $('.loader').removeClass('loader--open');
    });




    // Фикс модалок

    var modalsInsideLayout = document.querySelector('.layout .modals');

    if (modalsInsideLayout) {
        document.body.appendChild(modalsInsideLayout);
    }

    // Фикс видео
    var videos = Array.prototype.slice.call(document.querySelectorAll('.dv__bg video'));

    videos.forEach(function(video) {
        video.setAttribute('playsinline', '');
    })

})();