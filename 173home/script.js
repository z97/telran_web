$(document).ready(function($) {
    $('#z').click(function() {
        if ($('#x').val() !== '') {
            let newTask = $('#x').val();
            let newLi = $('<li>' + newTask + '</li>');
            newLi.on('click', function() {
                $(this).remove();
            });
            $('ul').prepend(newLi);
            $('#x').val('');
            return false;
        }
    });
});