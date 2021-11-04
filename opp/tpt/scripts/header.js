// Populate <header> element.

let header = document.querySelector("header");
header.innerHTML = 
      `<figure id="logo">
        <img src="images/tpt-logo.png" alt="The People's Tournament" />
      </figure>
      <div class="menu-toggle">
        <span class="fa fa-bars"></span>
      </div>
      <!-- Navigation menu -->
      <nav role="navigation">
        <ul role="presentation">
          <li>
            <a class="menu-wide" href="index.html">HOME</a>
          </li>
          <li>
            <a class="menu-wide" href="about.html">ABOUT</a>
          </li>
          <li>
            <a class="menu-wide" href="#">
              <span>FLYERS</span>
              <i class="fa fa-chevron-down fa-styling"></i>
            </a>
            <ul role="presentation">
              <li>
                <a class="menu-wide" href="flyer.html">THE EVENT</a>
              </li>
              <li>
                <a class="menu-wide" href="barbox.html">BARBOX 9-BALL BONANZA </a>
              </li>
              <li>
                <a class="menu-wide" href="ladies.html">LADIES 9-BALL</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="menu-wide" href="auction.html">AUCTION</a>
          </li>
          <li>
            <a class="menu-wide" href="venue.html">VENUE</a>
          </li>
          <li>
            <a class="menu-wide" href="#sponsors-title">SPONSORS</a>
          </li>
          <li>
            <a class="menu-wide" href="products.html">SHOP DUNGEON</a>
          </li>
          <li>
            <a class="menu-wide" href="photos.html">PHOTOS</a>
          </li>
        </ul>
      </nav>`;

// Hide Header on on scroll down.

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
