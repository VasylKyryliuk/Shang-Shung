$(function() {

	$('.toggle-menu').click(function (event) {
        event.preventDefault();
        $('.menu').toggle('slow');
    })

});