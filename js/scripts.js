$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("nav ul").toggleClass("showing"); 
  });
});

$(document).ready(function() {
  $("nav ul").mouseleave(function() {
    $("nav ul").toggleClass("showing"); 
  });
});

$(document).ready(function() {
  $("nav > ul > li").mouseleave(function() {
    $("nav ul li ul").slideUp(); 
  });
});

$(document).ready(function() {
  $("nav > ul > li").click(function() {  
    $("nav ul li:hover ul").slideToggle();
    /* 
    if ($(".nav ul li:hover ul").is(":visible")) {
      $(".nav ul li:hover ul").hide();
    } else {
    $(".nav ul li:hover ul").show(); 
    };
    */
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
      breakpoint: 1260,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 860,
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
	