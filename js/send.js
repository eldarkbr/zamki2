(function ($) {
    $(".some-form").submit(function (event) {
        event.preventDefault();
        var formId = ('#' + $(this).attr('id'));
        var fd = new FormData(document.querySelector(formId));
        $.ajax({
            url: "/php/send.php",
            type: "POST",
            data: fd,
            processData: false,
            contentType: false,
            beforeSend: function () {
               
                $(formId).find('.some-form__preloader').css('display', 'block');
                
            },
            success: function (data) {
                
                $(formId).find('.some-form__preloader').css('display', 'none');
                $(formId).find('.some-form__img').css('display', 'none');
                $(formId).find('.some-form__msgs').append(data);
                
                setTimeout(() => {
                    $(formId).find('.some-form__img').css('display','block');
                    $(formId).find('.some-form__msgs').html('');
                    $(formId).find('.some-form__button').prop("disabled", false);
                }, 4000);
            },
        });
    });
}(jQuery));