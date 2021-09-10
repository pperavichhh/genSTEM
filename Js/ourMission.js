var width = 0;
var height = 0;
var lineClamp = 0;

var problemsInfo = document.querySelectorAll(".problems-info");
var missionInfo = document.querySelectorAll(".mission .problems-info");

function updateWindowSize() {
	// Get the dimensions of the viewport
	width = window.innerWidth ||
							document.documentElement.clientWidth ||
							document.body.clientWidth;
	height = window.innerHeight ||
							 document.documentElement.clientHeight ||
							 document.body.clientHeight;

	if (width > 920) {
    problemsInfo.forEach(el => {
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
    });

    missionInfo.forEach(el => {
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
    });
  }
  else {
    problemsInfo.forEach(el => {
      el.classList.remove("flex-row");
      el.classList.add("flex-col");
    });

    missionInfo.forEach(el => {
      el.classList.remove("flex-row");
      el.classList.add("flex-col");
    });
  }
  
};
window.addEventListener("load", updateWindowSize);
window.addEventListener("resize", updateWindowSize);