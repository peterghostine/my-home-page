// Menu behavior

$(document).ready(function() {
	$(document).on('click', function(event) {
		if ($("nav > ul").is(":visible")) {
			if (!$(event.target).closest("nav > ul").length) {
				$("header > nav > ul").toggleClass("showing");
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

$(document).ready(function() {
	$('.image-link').magnificPopup({
		type: 'image'
	});
});