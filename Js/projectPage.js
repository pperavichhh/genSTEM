var width = 0;
var height = 0;
var fontSize = 0;
var main = document.querySelector("main");
var anotherBlog = document.querySelector(".another-blog");
var blogPost = document.querySelectorAll(".blog-post");
var caption = document.querySelectorAll(".blog-post > div");


function updateWindowSize() {
	// Get the dimensions of the viewport
	width = window.innerWidth ||
							document.documentElement.clientWidth ||
							document.body.clientWidth;
	height = window.innerHeight ||
							 document.documentElement.clientHeight ||
							 document.body.clientHeight;

	if (width > 920) {
		anotherBlog.classList.remove("flex-col");
		anotherBlog.classList.add("flex-row");

		anotherBlog.style.height = anotherBlog.clientWidth / 81 * 19.5 + "px";
		blogPost.forEach(el => {
			el.style.height = "inherit";
		});

		caption.forEach(el => {
			fontSize = parseFloat(el.clientHeight/7.75);
			if (fontSize > 12) el.style.fontSize = fontSize + "px";
			else el.style.fontSize = "12px";
		});
	}
	else if (width > 680) {
		anotherBlog.classList.remove("flex-row");
		anotherBlog.classList.add("flex-col");
		
		blogPost.forEach(el => {
			el.style.height = el.clientWidth / 16 * 9 + "px";
		});
		anotherBlog.style.height = "auto"

		if (width >= 680 && width <= 920) {
			caption.forEach(el => {
				el.style.fontSize = "16px"; 
			});
		}
		else {
			caption.forEach(el => {
				fontSize = parseFloat(el.clientHeight/7.75);
				if (fontSize > 12) el.style.fontSize = fontSize + "px";
				else el.style.fontSize = "12px";
			});
		}
	}
	else {
		anotherBlog.classList.remove("flex-row");
		anotherBlog.classList.add("flex-col");
		
		blogPost.forEach(el => {
			el.style.height = el.clientWidth / 4 * 3 + "px";
		});
		anotherBlog.style.height = "auto"

		caption.forEach(el => {
			fontSize = parseFloat(el.clientHeight/10.1875);
			if (fontSize > 12) el.style.fontSize = fontSize + "px";
			else el.style.fontSize = "12px";
		});
	}


	caption.forEach(el => {
		if (isOverflown(el)) {
		  el.style.height = "auto";
		}
		else{
			el.style.height = "";
		}
	});
	
};
window.addEventListener("load", updateWindowSize);  // When the page first loads
window.addEventListener("resize", updateWindowSize);  // When the browser changes size


$(window).scroll(function() {
	if ($(this).scrollTop() > ($('.blog-foot').position().top - $('.blog-sidebar').height() - 200)) { //use `this`, not `document`
		$('.blog-sidebar').css({ 'display': 'none' });
	}
	else {
		$('.blog-sidebar').css({ 'display': "" });
  }
});

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

