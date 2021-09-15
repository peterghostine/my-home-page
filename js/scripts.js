// Menu toggle //

$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("nav > ul").toggleClass("showing"); 
  });

  $("nav > ul").mouseleave(function() {
    if ($(".menu-toggle").is(":visible")) {
      $("nav > ul").toggleClass("showing"); 
    };
  });

  $("nav > ul > li").click(function() {  
    $("nav > ul > li:hover > ul").slideToggle();
  });

  $("nav > ul > li").mouseleave(function() {
    $("nav > ul > li > ul").slideUp(); 
  });
});


// Carousel //

$('.post-wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1585,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1495,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 955,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
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
	