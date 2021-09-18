// Menu behavior

$(document).ready(function() {

/*
  $(".menu-toggle").click(function() {
    $("nav > ul > li > ul").slideUp();
    $("nav > ul").toggleClass("showing"); 
  });
*/

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
      breakpoint: 1565,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
    }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1175,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
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
	