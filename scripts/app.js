$(document).ready(function(){
	
	// fade in each section on scroll


	tiles = $('section').fadeTo(0, 0);

	$(window).scroll(function(delay, opacity) {
	    tiles.each(function(i) {
	        elementBottom = $(this).offset().top + 300;
	        windowBottom = $(window).scrollTop() + $(window).height() + 200;
	        if (elementBottom < windowBottom) $(this).fadeTo(700, 1);
	    });
	});

	// animate scroll to section when link is clicked

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top}, 600);
	    return false;
	});




});