//тут я все сделал можно не трогать 
$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.manned-flight').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.frameless-parachute').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#frameless-parachute').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.english-channel').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#english-channel').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about2').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about2').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about3').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about3').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about4').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about4').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about5').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about5').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#frameless-parachute').offset().top - (($('#english-channel').offset().top - $('#frameless-parachute').offset().top) / 2);
	var section3Top =  $('#english-channel').offset().top - (($('#about').offset().top - $('#english-channel').offset().top) / 2);
	var section4Top =  $('#about').offset().top - (($('#about2').offset().top - $('#about').offset().top) / 2);
	var section5Top =  $('#about2').offset().top - (($('#about3').offset().top - $('#about2').offset().top) / 2);
	var section6Top =  $('#about3').offset().top - (($('#about4').offset().top - $('#about3').offset().top) / 2);
	var section7Top =  $('#about4').offset().top - (($('#about5').offset().top - $('#about4').offset().top) / 2);
	var section8Top =  $('#about5').offset().top - (($(document).height() - $('#about5').offset().top) / 2);
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.manned-flight').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.frameless-parachute').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.english-channel').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.about').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.about2').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.about3').addClass('active');
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('nav#primary a.about4').addClass('active');
	} else if ($(document).scrollTop() >= section8Top){
		$('nav#primary a.about5').addClass('active');
	}

	
}
