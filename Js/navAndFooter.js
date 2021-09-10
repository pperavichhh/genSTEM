window.onscroll = function(){
	navStatus();
}

var prevY = window.pageYOffset;
function navStatus(){
	var nav = document.getElementById("navbar");
	var currentY = window.pageYOffset;
	if(window.pageYOffset >= nav.offsetHeight){
		if(currentY > prevY){
			nav.style.top = "-100px"
		}
		else{
			nav.style.top = "0px"
		}
	}
	prevY = currentY;
}