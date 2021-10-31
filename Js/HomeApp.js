window.onscroll = function(){
	plusNum()
}
//slider();
/*function slider(){
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
}*/


var firsttime = true;
function plusNum(){
	var scrollTop = document.documentElement.scrollTop;
	var cont = document.querySelector("section.goals");
	var cont2 = document.querySelector("section.main-head");
	var counter = document.querySelector("div.problems");
	if(scrollTop > (cont.offsetHeight + cont2.offsetHeight) - counter.offsetHeight && firsttime){
		var numbers = document.querySelectorAll(".problems-num > div > p:first-child");
		const COUNT_SPEED = 200;
		numbers.forEach(number => {
			const updateCount = () => {
				const numText = Number(number.innerText);
				const goal = Number(number.getAttribute("goal"));
				
				const plus = goal/COUNT_SPEED;

				if(numText < goal){
					number.innerText = Math.ceil(numText + plus);
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


var width = 0;
var height = 0;

var problemNum = document.querySelectorAll(".problems .problems-num");
var sponsors = document.querySelectorAll(".sponsors-logo");

function updateWindowSize() {
	// Get the dimensions of the viewport
	width = window.innerWidth ||
							document.documentElement.clientWidth ||
							document.body.clientWidth;
	height = window.innerHeight ||
							 document.documentElement.clientHeight ||
							 document.body.clientHeight;

  if (width > 840) {
    problemNum.forEach(el => {
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
    });
  } else {
    problemNum.forEach(el => {
      el.classList.remove("flex-row");
      el.classList.add("flex-col");
    });
  }

	if (width > 768) {
    sponsors.forEach(el => {
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
    });
  } else {
    sponsors.forEach(el => {
      el.classList.remove("flex-row");
      el.classList.add("flex-col");
    });
  }
	
};
window.addEventListener("load", updateWindowSize);
window.addEventListener("resize", updateWindowSize);


var bullet = document.querySelectorAll(".bullet-container .bullet");
var slider = document.querySelectorAll(".slider-content .slider-single");

bullet.forEach(el => {
  el.onclick = function() {
    bullet.forEach((e, i) => {
      if (el == e) {
        if (!e.classList.contains("active")) {
          e.classList.add("active");
          slider[i].classList.add("active");
        }
      } else {
        e.classList.remove("active");
        slider[i].classList.remove("active");
      }
    });
  }
});

var countImage = 0;
function carousel(){
	for (var i = 0; i < bullet.length; i++) {
		bullet[i].classList.remove("active");
		slider[i].classList.remove("active");
	}
	countImage++;
	if (countImage > bullet.length) {
		countImage = 1;
	}

	bullet[countImage-1].classList.add("active");
	slider[countImage-1].classList.add("active");

	setTimeout(carousel, 3000);
}
carousel();