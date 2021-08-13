var countImage = 0;
window.onresize = sizeOpContainer;
slider();
sizeOpContainer();
function slider(){
	var image = document.getElementsByClassName("slide-img");
	var i;
	for(i=0; i<image.length; i++){
		image[i].style.display = "none";
	}
	countImage++;
	if(countImage > image.length){
		countImage=1;
	}
	image[countImage-1].style.display = "initial";
	setTimeout(slider, 2000);
}

function sizeOpContainer(){
	var container = document.getElementById("op");
	var footer = document.getElementById("footer");
	var nav = document.getElementById("nav");
	var html = document.getElementById("html");
	var divHeight = window.innerHeight - footer.offsetHeight - nav.offsetHeight;
	html.style.height = window.innerHeight + "px";
	container.style.top = nav.offsetHeight + "px";
	container.style.height = divHeight + "px";
}