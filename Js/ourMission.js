var width = 0;
var height = 0;

var problemNum = document.querySelectorAll(".problems .problems-num");
var goalInfo = document.querySelectorAll(".goals .problems-info");
var missionInfo = document.querySelectorAll(".mission .problems-info");
//var missionSection = document.querySelectorAll(".mission-section");
//var missionImg = document.querySelector(".mission img");

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

    goalInfo.forEach(el => {
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
    });
  } else {
    problemNum.forEach(el => {
      el.classList.remove("flex-row");
      el.classList.add("flex-col");
    });

    goalInfo.forEach(el => {
      el.classList.remove("flex-row");
      el.classList.add("flex-col");
    });
  }

	if (width > 1310) {
    missionInfo.forEach(el => {
      el.classList.remove("wrap");
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
    });
  } else if (width > 768) {
    missionInfo.forEach(el => {
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
      el.classList.add("wrap");
    });
  } else {
    missionInfo.forEach(el => {
      el.classList.remove("wrap");
      el.classList.remove("flex-row");
      el.classList.add("flex-col");
    });
  }
};
window.addEventListener("load", updateWindowSize);
window.addEventListener("resize", updateWindowSize);


const bgImage = [
  "url('../asset/Photos/Virtual Sci ws @ANS/IMG_7466.jpg')", 
  "url('../asset/Photos/Background/elementary-school-students.jpg')",
  "url('../asset/Photos/Background/asian-student-learning-on-site.jpg')", 
  "url('../asset/Photos/Background/elementary-school-students.jpg')"
]
const Image = [
  '../asset/Photos/Virtual Sci ws @ANS/IMG_7466.jpg', 
  '../asset/Photos/Background/elementary-school-students.jpg',
  '../asset/Photos/Background/asian-student-learning-on-site.jpg', 
  '../asset/Photos/Background/elementary-school-students.jpg'
]

/*missionSection.forEach((el, idx) => {
	el.onmouseover = function() {
    console.log(idx)
    //el.querySelector("img").style.opacity = 1;
		mission.style.background = bgImage[idx];
    mission.style.transition = "all 2s";

    missionImg.src = Image[idx];
    missionImg.style.opacity = 1;
	}
  el.onmouseout = function() {
    //el.querySelector("img").style.opacity = 0.5;
		//mission.style.background = "#A87671";

    missionImg.style.opacity = 0.5;
	}
});*/

/*missionSection.forEach((el, idx) => {
	el.onmouseover = function() {
    missionSection.forEach(e => {
      if (e != el) {
        e.style.opacity = 0.2;
      } else {
        e.style.opacity = 1;
        console.log(e);
      }
    });
	}
  el.onmouseout = function() {
    missionSection.forEach(e => {
      e.style.opacity = 1;
    });
	}
});*/