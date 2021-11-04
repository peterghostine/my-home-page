// Menu behavior
$(document).ready(function() {
  
  $(document).on('click', function(event) {
    if ($("nav > ul").is(":visible")) {
      if (!$(event.target).closest("nav > ul").length) {
        $("nav > ul > li > ul").slideUp();
        $("nav > ul").toggleClass("showing");
      };  
    } else if (($(event.target).closest(".menu-toggle").length)) {
        $("nav > ul").toggleClass("showing"); 
    };
  });

  $("nav > ul > li").click(function() { 
    $("nav > ul > li:hover > ul").slideToggle();
  });
  

  $("nav > ul > li").mouseleave(function() {
    if ($(".menu-toggle").is(":hidden")) {
      $("nav > ul > li > ul").slideUp(); 
    };
  });   
});



// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
    
  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
    return;
    
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('header').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-up').addClass('nav-down');
    }
  }
  lastScrollTop = st;
}


// Carousel
$('.slides').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1565,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
    }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1175,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 785,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});