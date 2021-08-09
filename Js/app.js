var countImage = 0;

window.addEventListener("scroll", function(){
	navShow(),
	NavCheckPos()
});

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
	console.log(prevY);
	console.log(currentY);
	if(prevY > currentY){
        nav.style.top = "0px"
    }
    else{
        nav.style.top = "-100px"
        nav.style.zIndex = "1"
    }
    prevY = currentY;
}
function NavCheckPos(){
    var home = document.getElementById("navHome");
    var spon = document.getElementById("navSpon");
    var wwd = document.getElementById("navWWD");
    var cont = document.getElementById("navCont");
    
	var nav = document.getElementById("nav");

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    var homePos = document.getElementById("op").offsetTop;
    var sponPos = document.getElementById("spon").offsetTop;
    var wwdPos = document.getElementById("wwd").offsetTop;
    // var contPos = document.getElementById("cont").offsetTop;

    if(scrollTop < sponPos){
        home.classList.add("active");
        spon.classList.remove("active");
        wwd.classList.remove("active");
		nav.style.backgroundColor = "transparent"
    }
    if(scrollTop >= sponPos && scrollTop < wwdPos){
        home.classList.remove("active");
        spon.classList.add("active");
        wwd.classList.remove("active")
		nav.style.backgroundColor = "white"
    }
    if(scrollTop >= wwdPos){
        home.classList.remove("active");
        spon.classList.remove("active");
        wwd.classList.add("active");
    }
}