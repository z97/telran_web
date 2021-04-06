$(document).ready(function ($) {
    $('form').submit(function () {
        if ($('.input').val() !== '') {
            var newTask = $('.input').val();
            var newLi = $('<li>' + newTask + '</li>');
            newLi.on('click', function () {
                $(this).remove();
            });
            $('ul').prepend(newLi);
            $('.input').val('');
            return false;
        }
    });
    $('ul').sortable();
});