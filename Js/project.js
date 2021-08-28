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

let checkShowDetails = false;
function showDetails(CONTAINER_ID, HEAD_ID, DETAILS_CONTAINER_ID, DETAILS_ID, FOOTER_ID){
	var cont = document.getElementById(CONTAINER_ID);
	var	head = document.getElementById(HEAD_ID);
	var de_cont = document.getElementById(DETAILS_CONTAINER_ID);
	var details = document.getElementById(DETAILS_ID);
	var footer = document.getElementById(FOOTER_ID);
	if(!checkShowDetails){
		cont.classList.add("active");
		head.classList.add("active");
		de_cont.classList.add("active");
		details.classList.add("active");
		footer.classList.add("active");
		checkShowDetails = !checkShowDetails;
	}
	else{
		cont.classList.remove("active");
		head.classList.remove("active");
		de_cont.classList.remove("active");
		details.classList.remove("active");
		footer.classList.remove("active");
		checkShowDetails = !checkShowDetails;
	}
}	

slider();
function slider(){
	var picture = document.querySelector(".showImage");
	let i = 1
	setTimeout(() => {
		slider();
	}, 2000);
}