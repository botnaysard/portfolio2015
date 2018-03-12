$(document).ready(function(){
	
	// start adjust rendering for devices
	
	var viewPortScale = 1 / window.devicePixelRatio;
	$('#viewport').attr('content', 'user-scalable=no, initial-scale='+viewPortScale+', width=device-width');
	
	// end adjust rendering for devices



	// start animate scroll to section when link is clicked
	/*
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top}, 600);
	    return false;
	});
	*/
	$('.toplink').on('click', function() {
		console.log('click.');
		if ($(this).attr('id') == "go-home") {
			$('#sec-projects, #sec-contact').hide(500);
			$('#masthead').fadeIn(500);
		} else if ($(this).attr('id') == "go-portfolio") {
			$('#masthead, #sec-contact').hide(500);
			$('#sec-projects').fadeIn(500);
		} else if ($(this).attr('id') == "go-contact") {
			$('#masthead, #sec-projects').hide(500);
			$('#sec-contact').fadeIn(500);
		}
	});

	// end animate on scroll to section when link is clicked

	// start contact form

	$('#slickform').on('submit', function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var comments = $('#comments').val();
 
        $.ajax({
            url:'https://formspree.io/xdggjdym',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                 email:email,
                comments:comments,
                _subject:'Form submission from scotthayward.io',
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                $('#formBlock').fadeOut();
                $('#thankyouBlock').fadeIn();
            }   

        });     
        
    });

    // end contact form

});