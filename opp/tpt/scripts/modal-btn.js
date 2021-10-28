$(document).ready(function() {
	const buttons = document.getElementsByClassName("button");

	const img = ["images/event-flyer.jpg",
		"images/barbox-event-flyer.jpg",
		"images/ladies-event-flyer.jpg",
		"images/auction-ladies.jpg"
	];
	const modal = document.getElementById("modal-container");
	let modalImg = document.getElementById("modal-img");

	Array.prototype.forEach.call(buttons, (item, index) => {
		item.addEventListener('click', () => {
			modalImg.src = img[index];
			modal.style.display = "block";
		});
	});

	// Get the <span> element that closes the modal.
	var close = document.getElementById("close");

	// When the user clicks on <span> (x), close the modal.
	close.onclick = function() {
		modal.style.display = "none";
	}

});