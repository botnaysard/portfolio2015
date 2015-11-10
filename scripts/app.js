$(document).ready(function(){


	// animate scroll to section when link is clicked

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top}, 600);
	    return false;
	});

});