$(document).ready(function(){
	
	// adjust rendering for devices
	var viewPortScale = 1 / window.devicePixelRatio;
	$('#viewport').attr('content', 'user-scalable=no, initial-scale='+viewPortScale+', width=device-width');

	// determine if content is being viewed on a mobile device
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

	// if the device is NOT mobile, allow animations
    if(!isMobile.any()) { 

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
	}

	// contact form

	$('#slickform').on('submit', function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var comments = $('#comments').val();
 
        $.ajax({
            url:'https://formspree.io/hifive@scotthayward.io',
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

});