$(document).ready(function (){
    $('.skillset').hide();
    //$('.skillset').show(2000);
    $('.skillset').fadeIn(2000);
    $('.projects').hide();
    $('.project-button').on('click', function (e){
        //$('.projects').show(400);
        //$(this).next().show(400);
        //$(e.target).next().show(400);
        $(e.target).next().slideToggle(400);
        let text = $(e.target).text();
        $(e.target).text().includes('viewed') ? text : text + ' viewed';
        $(e.target).text('project viewed');
        $(e.target().toggleClass('active'))
    })
})