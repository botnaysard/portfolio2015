$(document).ready(function(){

	// fade the first two sections of the page in on load
	$('.on-page-load').css('display', 'none');
	$('.on-page-load').fadeIn(750);

	// fade in each remaining section on scroll

	tiles = $('.faded').fadeTo(0, 0);

	$(window).scroll(function(delay, opacity) {
	    tiles.each(function(i) {
	        elementBottom = $(this).offset().top + 400;
	        windowBottom = $(window).scrollTop() + $(window).height() + 300;
	        if (elementBottom < windowBottom) $(this).fadeTo(700, 1);
	    });
	});

	// animate scroll to section when link is clicked

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top}, 600);
	    return false;
	});

	// animate menu on scroll

	var windowPosition = $(window);
	var currentPosition = windowPosition.scrollTop();
	var goingUp = false;
	var scrollPosition;
	windowPosition.scroll(function () {
	    scrollPosition = windowPosition.scrollTop();
	    if (scrollPosition > currentPosition && !goingUp) {
	        $('.nav').stop().slideToggle();
	        goingUp = !goingUp;
	        console.log(goingUp);
	    } else if(scrollPosition < currentPosition && goingUp) {
	        $('.nav').stop().slideToggle();
	        goingUp = !goingUp;
	    }
	    currentPosition = scrollPosition;
	});

});