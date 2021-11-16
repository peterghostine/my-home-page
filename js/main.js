// Menu behavior
$(function () {
  $(document).on('click', function (event) {
    $topLevelUL = $("header > nav > ul");
    if ($topLevelUL.is(":visible") && ($(".menu-toggle").is(":visible"))) {
      if (!$(event.target).closest("header > nav > ul").length) {
        $("header > nav > ul > li > ul").slideUp();
        $topLevelUL.toggleClass("showing");
      };
    } else if (($(event.target).closest(".menu-toggle").length)) {
        $topLevelUL.toggleClass("showing");
    };
  });
  $topLevelUL_LI = $("header > nav > ul > li");
  $topLevelUL_LI.click(function () {
    $("header > nav > ul > li:hover > ul").slideToggle();
  });
  $topLevelUL_LI.mouseleave(function () {
    if ($(".menu-toggle").is(":hidden")) {
      $("header > nav > ul > li > ul").slideUp();
    };
  });
});

// Carousel
$('.slides').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  dots: true,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [{
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
  ]
});

// Email form submission
var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  status.innerHTML = "";
  status.classList.remove("success");
  status.classList.remove("error");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.error) {
      status.classList.add("error");
      status.innerHTML = "Error";
    } else {
      status.classList.add("success");
      status.innerHTML = "Success!";
      form.reset()
    }
  });
};
form.addEventListener("submit", handleSubmit);

// The code below shows the project description on the Portfolio page when "?" is clicked.
function showDescription(e) {

  var target = e.target;
  if (target.classList[1] === 'fa-question-circle') {
    var description = modal.getElementsByClassName("modal-content")[0];
    description.innerHTML = target.parentNode.getElementsByClassName("description")[0].innerHTML;
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignContent = "center";
  };
};

// Modal popup for portfolio projects
const modal = document.getElementById("modal-container");
const slides = document.getElementById("slides");
slides.addEventListener('click', showDescription, false);

// Get the <span> element that closes the modal.
var close = document.getElementById("close");

// When the user clicks on <span> (x), close the modal.
close.onclick = function () {
  modal.style.display = "none";
};