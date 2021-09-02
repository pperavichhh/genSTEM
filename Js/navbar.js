var width = 0;
var height = 0;
var menuHamburger = document.querySelector("#menu-hamburger");
var menuClose = document.querySelector("#menu-close");
var menuNav = document.querySelector(".menu-nav");
var overlay =  document.querySelector(".overlay");
var navLi = document.querySelectorAll(".nav-listitem");
var navLiDrop = document.querySelectorAll(".nav-listitem-drop");


function updateWindowSize() {
	// Get the dimensions of the viewport
	width = window.innerWidth ||
							document.documentElement.clientWidth ||
							document.body.clientWidth;
	height = window.innerHeight ||
							 document.documentElement.clientHeight ||
							 document.body.clientHeight;

	if (width > 800) {
		menuHamburger.style = "display: none";
		menuClose.style = "display: none";
		menuNav.style = "display: initial";
		overlay.style = "display: none";
		navLiDrop.forEach(el => {
			el.parentNode.style.backgroundColor = "white";
			el.style.display = "none";
		});
	}
	else {
		if (menuClose.style.display == "none") {
			menuHamburger.style.display = "initial";
			menuNav.style.display = "none";
		}
	}
};
window.onload = updateWindowSize;       // When the page first loads
window.onresize = updateWindowSize;     // When the browser changes size


menuHamburger.onclick = () => {
	menuHamburger.style.display = "none";
	menuClose.style.display = "initial";
	menuNav.style.display = "initial";
	overlay.style.display = "initial";
}

menuClose.onclick = () => {
	menuHamburger.style.display = "initial";
	menuClose.style.display = "none";
	menuNav.style.display = "none";
	overlay.style.display = "none";
	navLiDrop.forEach(el => {
		el.parentNode.style.backgroundColor = "white";
		el.style.display = "none";
	});
}

navLi.forEach(el => {
	el.onclick = function() {
		navLiDrop.forEach(e => {
			if (width < 800) {
				if (this != e.parentNode) {
					e.parentNode.style.backgroundColor = "white";
					e.style.display = "none";
				}
				else {
					if (e.style.display != "none" && e.style.display != "") {
						this.style.backgroundColor = "white";
						e.style.display = "none";
					}
					else {
						this.style.backgroundColor = "#fce4ec";
						e.style = "display: flex !important";
					}
				}
			}
		});
	}
});