// Insert image inside the modal container - Use its "alt" text as a caption.
/*
const img = document.getElementById("myImg");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
*/

/*
document.getElementsByClassName("button")[0].onclick = function() {
const targetId = this.id;
window.alert(targetId);
};

document.getElementsByClassName("button")[1].onclick = function() {
    const targetId = this.id;
    window.alert(targetId);
};

document.getElementsByClassName("button")[3].onclick = function() {
    const targetId = this.id;
    window.alert(targetId);
};
*/


const buttons = document.getElementsByClassName("button");

const img = ["images/event-flyer.jpg",
             "images/barbox-event-flyer.jpg",
             "images/ladies-event-flyer.jpg",
             "images/auction-ladies.jpg"];

const modal = document.getElementById("modal-container");
let modalImg;

Array.prototype.forEach.call(buttons, (item, index) => {
    item.addEventListener('click', () => {
        modalImg = document.getElementById("modal-img");
        modalImg.src = img[index];
        modal.style.display = "block";
    });    
});

// Get the <span> element that closes the modal
var close = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
close.onclick = function() { 
  modal.style.display = "none";
}

/*
img.onclick = function(){
    
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
*/