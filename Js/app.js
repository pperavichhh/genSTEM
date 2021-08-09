var countImage = 0;

window.onscroll = function(){
	navShow(),
	navCheck();
}

slider();
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
var prevY = window.pageYOffset || document.documentElement.scrollTop;
function navShow(){
	var nav = document.getElementById("nav");
	var currentY = window.pageYOffset || document.documentElement.scrollTop;
	if(prevY > currentY){
        nav.style.top = "0px"
    }
    else{
        nav.style.top = "-80px"
        nav.style.zIndex = "1"
    }
    prevY = currentY;
}
function navCheck(){
	var home = document.getElementById("home");
	var blog = document.getElementById("blog");
	var workshop = document.getElementById("ws");
	var team = document.getElementById("team");
}