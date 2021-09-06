$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("nav ul").toggleClass("showing"); 
  });
});

/*
$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("nav > ul").slideToggle(); 
  });
});
*/

$(document).ready(function() {
  $("nav > ul > li").mouseleave(function() {
    $("nav ul li ul").slideUp(); 
  });
});

$(document).ready(function() {
  $("nav > ul > li").click(function() {  
    $("nav ul li:hover ul").slideToggle();
  });
});

$('.post-wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 790,
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
	