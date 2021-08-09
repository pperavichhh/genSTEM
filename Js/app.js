var countImage = 0;
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