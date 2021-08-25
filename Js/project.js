// var countImage = 0;
window.onresize = sizeOpContainer;
// slider();
sizeOpContainer();
// function slider(){
// 	var image = document.getElementsByClassName("slide-img");
// 	var i;
// 	for(i=0; i<image.length; i++){
// 		image[i].style.display = "none";
// 	}
// 	countImage++;
// 	if(countImage > image.length){
// 		countImage=1;
// 	}
// 	image[countImage-1].style.display = "initial";
// 	setTimeout(slider, 2000);
// }

function sizeOpContainer(){
	var container = document.getElementById("project-card-container");
	var nav = document.getElementById("nav");
	// var divHeight = window.innerHeight - nav.offsetHeight;
	container.style.marginTop = nav.offsetHeight*2 + "px";
	// container.style.height = divHeight + "px";
	if(window.innerWidth > 800){
		let link = document.getElementById("link");
		let toggle = document.getElementById("toggle");
		let close = document.getElementById("close");
		let nav = document.getElementById("nav");
		link.style.display = "flex";
		toggle.style.display = "none";
		close.style.display = "none";
	}
	else{
		hideNav();
	}
}

function showNav(){
	var link = document.getElementById("link");
	var toggle = document.getElementById("toggle");
	var close = document.getElementById("close");
	var nav = document.getElementById("nav");
	link.style.display = "flex";
	toggle.style.display = "none";
	close.style.display = "initial";
}
function hideNav(){
	var link = document.getElementById("link");
	var toggle = document.getElementById("toggle");
	var close = document.getElementById("close");
	var nav = document.getElementById("nav");
	link.style.display = "none";
	toggle.style.display = "initial";
	close.style.display = "none";
}