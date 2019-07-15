const JOIN_US_CLASS_SHOW_ALERT = 'join-us__alert--show';

let $joinUsBlock = $('.join-us'),
    $joinUsBlockAlert = $('.join-us__alert'),
    statusSent = true;

function showJoinUsAlert() {
    $joinUsBlockAlert.addClass(JOIN_US_CLASS_SHOW_ALERT);
}

function hideJoinUsAlert() {
    $joinUsBlockAlert.removeClass(JOIN_US_CLASS_SHOW_ALERT);
}

/*$joinUsBlock.find('form .button').click(function (event) {
    event.preventDefault();
    
    if (statusSent) {
        showJoinUsAlert();

        setTimeout(function () {
            hideJoinUsAlert();
        }, 3600);

        return false
    }
});*/

$joinUsBlockAlert.click(function () {
    hideJoinUsAlert();
});

$(document).ready(function() {
    $('#reviewModal').on('shown.bs.modal', function (e) {
        var modal = $(this);
        var form = modal.find('form');
        var button = form.find('button');
        var agreement = form.find('input[name="agreement"]');

        var name = form.find('input[name="name"]');
        var email = form.find('input[name="email"]');
        var phone = form.find('input[name="phone"]');
        var review = form.find('textarea[name="review"]');

        if(agreement.is(':checked'))
            button.removeAttr('disabled');
        else
            button.attr('disabled', 'disabled');

        agreement.change(function () {
            if ($(this).is(':checked'))
                button.removeAttr('disabled');
            else
                button.attr('disabled', 'disabled');
        });

        form.submit(function (event) {
            event.preventDefault();

            if (name.val() == '')
                alert('Укажите имя');
            else if (email.val() == '' && phone.val() == '')
                alert('Укажите Телефон или Email');
            else if (review.val() == '')
                alert('Напишите текст отзыва');
            else if (!agreement.is(':checked'))
                alert('Дайте согласие на обработку персональных данных');
            else {
                $('.loader').addClass('loader--open');

                $.ajax({
                    url: '/.ajax.php',
                    type: 'post',
                    data: form.serialize() + '&TYPE=review',
                    dataType: 'json',
                    success: function (data) {
                        $('.loader').removeClass('loader--open');

                        if (data.success) {
                            modal.modal('hide');
                            $('#thanksDoneModal').find('.thanks-done__caption').text('Спасибо за ваш отзыв');
                            $('#thanksDoneModal').find('.thanks-done__description').text('');
                            $('#thanksDoneModal').modal('show');
                        }

                    },
                    error: function () {
                        $('.loader').removeClass('loader--open');
                        alert('Не удалось отправить. Попробуйте еще раз');
                    }
                });
            }
        });
    });

    $('#orderModal').on('shown.bs.modal', function (event) {
        var modal = $(this);
        var form = modal.find('form');
        var button = form.find('button');
        var agreement = form.find('input[name="agreement"]');

        var tour = form.find('input[name="tour"]');
        var name = form.find('input[name="name"]');
        var email = form.find('input[name="email"]');
        var phone = form.find('input[name="phone"]');

        tour.val($(event.relatedTarget).data('tour'));

        if(agreement.is(':checked'))
            button.removeAttr('disabled');
        else
            button.attr('disabled', 'disabled');

        agreement.change(function () {
            if ($(this).is(':checked'))
                button.removeAttr('disabled');
            else
                button.attr('disabled', 'disabled');
        });

        form.submit(function (event) {
            event.preventDefault();

            if (name.val() == '')
                alert('Укажите имя');
            else if (email.val() == '' && phone.val() == '')
                alert('Укажите Телефон или Email');
            else if (!agreement.is(':checked'))
                alert('Дайте согласие на обработку персональных данных');
            else {
                $('.loader').addClass('loader--open');

                $.ajax({
                    url: '/.ajax.php',
                    type: 'post',
                    data: form.serialize() + '&TYPE=order',
                    dataType: 'json',
                    success: function (data) {
                        $('.loader').removeClass('loader--open');

                        if (data.success) {
                            modal.modal('hide');
                            $('#thanksDoneModal').find('.thanks-done__caption').text('Спасибо за обращение!');
                            $('#thanksDoneModal').find('.thanks-done__description').text('Мы вам перезвоним в течении 15 минут.');
                            $('#thanksDoneModal').modal('show');
                        }

                    },
                    error: function () {
                        $('.loader').removeClass('loader--open');
                        alert('Не удалось отправить. Попробуйте еще раз');
                    }
                });
            }
        });
    });

    $('.layout__section .join-us__form').each(function(){
        var form = $(this);

        var button = form.find('button');

        var agreement = form.find('input[name="agreement"]');

        var name = form.find('input[name="name"]');
        var email = form.find('input[name="email"]');
        var phone = form.find('input[name="phone"]');
        var comment = form.find('textarea[name="comment"]');

        if(agreement.is(':checked'))
            button.removeAttr('disabled');
        else
            button.attr('disabled', 'disabled');

        agreement.change(function(){
            if($(this).is(':checked'))
                button.removeAttr('disabled');
            else
                button.attr('disabled', 'disabled');
        });

        form.submit(function(event){
            event.preventDefault();

            if(name.val() == '')
                alert('Укажите имя');
            else if(email.val() == '' && phone.val() == '')
                alert('Укажите Телефон или Email');
            else if(comment.val() == '')
                alert('Напишите текст комментария');
            else if(!agreement.is(':checked'))
                alert('Дайте согласие на обработку персональных данных');
            else {
                $('.loader').addClass('loader--open');

                $.ajax({
                    url : '/.ajax.php',
                    type: 'post',
                    data: form.serialize() + '&TYPE=callback',
                    dataType: 'json',
                    success: function(data){
                        $('.loader').removeClass('loader--open');

                        if(data.success){
                            $('#thanksDoneModal').find('.thanks-done__caption').text('Спасибо за обращение!');
                            $('#thanksDoneModal').find('.thanks-done__description').text('');
                            $('#thanksDoneModal').modal('show');
                        }

                    },
                    error: function(){
                        $('.loader').removeClass('loader--open');
                        alert('Не удалось отправить. Попробуйте еще раз');
                    }
                });
            }
        });
    });
});
