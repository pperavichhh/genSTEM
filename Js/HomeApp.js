var countImage = 0;
window.onscroll = function(){
	plusNum()
}
slider();
checkOPContainer();
function slider(){
	var image = document.getElementsByClassName("slider-img");
	var i;
	for(i=0; i<image.length; i++){
		image[i].style.display = "none";
	}
	countImage++;
	if(countImage > image.length){
		countImage=1;
	}
	image[countImage-1].style.display = "initial";
	setTimeout(slider, 1500);
}

function checkOPContainer(){
	var op = document.getElementById("op-cont");
	op.style.height = window.innerHeight+"px";
}

var firsttime = true;
function plusNum(){
	var scrollTop = document.documentElement.scrollTop;
	var cont = document.getElementById("op-cont");
	var counter = document.getElementById("student-container");
	if(scrollTop > cont.offsetHeight - counter.offsetHeight && firsttime){
		var numbers = document.querySelectorAll(".num");
		const COUNT_SPEED = 200;
		numbers.forEach(number => {
			const updateCount = () => {
				const numText = Number(number.innerText);
				const goal = Number(number.getAttribute("goal"));
				
				const plus = goal/COUNT_SPEED;

				if(numText < goal){
					number.innerText =Math.ceil(numText + plus);
					setTimeout(updateCount, 1);
				}
				else{
					number.innerText = goal;
				}
			}
			updateCount();
		});
		firsttime= false;
	}
	
}