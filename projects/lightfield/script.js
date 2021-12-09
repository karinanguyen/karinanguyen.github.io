var bandRight = document.getElementById("band-right") 
var bandLeft = document.getElementById("band-left") 
var carouselParent = document.getElementById("carousel");
var carouselChild = document.getElementById("band-wrapper");
var carouselImg = [document.getElementById("img-0"),document.getElementById("img-1"),
                   document.getElementById("img-2"),document.getElementById("img-3"),document.getElementById("img-4"), 
                   document.getElementById("img-5"),document.getElementById("img-6"),document.getElementById("img-7"), 
                   document.getElementById("img-8"),document.getElementById("img-9"),document.getElementById("img-10"), 
                   document.getElementById("img-11"),document.getElementById("img-12"),document.getElementById("img-13")];

var clickCount = 0;
var moveAmount = 0; 
var previewImg = document.getElementById("p6-img"); 
var abstractButton = document.getElementById("abstractButton");
var portraitButton = document.getElementById("portraitButton");

bandRight.onclick = function() {moveRight()};
bandLeft.onclick = function() {moveLeft()};
window.onload = function() {startUp()};


function moveRight() {
	if (clickCount + 1 < 12) {
		clickCount = clickCount + 1;
		carouselChild.style.left = (moveAmount*clickCount)*-1+"px";
	}
}


function moveLeft() {
	if (clickCount -1 >= 0) {
		clickCount = clickCount -1;
		carouselChild.style.left = (moveAmount*clickCount)*-1+"px";
	}
}

function startUp() {
	carouselChild.style.left = 0;
	moveAmount = (carouselImg[2].getBoundingClientRect().left-carouselImg[1].getBoundingClientRect().left)-(carouselImg[1].style.width/2);
}

abstractButton.onclick = function() {
	portraitButton.style.color = "#E3E3E3";
	abstractButton.style.color = "#000000";
	previewImg.src = "small_imgs.jpg";
}

portraitButton.onclick = function() {
	portraitButton.style.color = "#000000";
	abstractButton.style.color = "#E3E3E3";
	previewImg.src = "large_imgs.jpg";
}