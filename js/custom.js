$(document).ready(function(){
	$('a[href*=#]:not([href=#])').not('#myCarousel a, .modal-trigger a, .panel a').click(function(o) {
		$('html,body').animate({
			scrollTop: $($(this).attr("href")).offset().top-75
		}, 700, 'swing');
	});
})

// the nav-bar gets a new background-color when scroll down
var a = $(".navbar-inverse").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.navbar-inverse').css({"background":"black"});
    } else {
       $('.navbar-inverse').css({"background":"rgba(28, 28, 28, 0.5)"});
    }
});
