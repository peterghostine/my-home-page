$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $(".nav ul").toggleClass("showing"); 
  });
});

$(document).ready(function() {
  $(".nav > ul > li").mouseleave(function() {
    $(".nav ul li ul").hide(); 
  });
});

$(document).ready(function() {
  $(".nav > ul > li").mouseenter(function() {
    $(".nav > ul > li").click(function() {  
      $(".nav ul li:hover ul").show(); 
    });
  });
});

$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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
	