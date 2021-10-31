// Hide Header on on scroll down
let didScroll;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 200);

function hasScrolled() {
	var st = $(this).scrollTop();

	// Make sure they scroll more than delta
	if (Math.abs(lastScrollTop - st) <= delta)
		return;

	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight) {
		// Scroll Down
		$('header').addClass('nav-up');
	} else {
		// Scroll Up
		if (st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up');
		}
	}
	lastScrollTop = st;
}