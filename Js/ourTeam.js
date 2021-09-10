var width = 0;
var height = 0;
var lineClamp = 0;
var founders = document.querySelector(".founders-list");
var founder = document.querySelectorAll(".founders-list li");
var readMore = document.querySelectorAll(".founder-info > span");
var founderSpeech = document.querySelectorAll(".founder-speech");

var volunteers = document.querySelectorAll(".volunteers > div:nth-child(2)");
var volunteersTemp = document.querySelectorAll(".volunteers2 > div");
var position = document.querySelectorAll(".position");
var positionLi = document.querySelectorAll(".position span");
var membersList = document.querySelectorAll(".members-list");

var volunteersTable = document.querySelectorAll(".volunteers-table");
var volunteers2 = document.querySelectorAll(".volunteers2");

function updateWindowSize() {
	// Get the dimensions of the viewport
	width = window.innerWidth ||
							document.documentElement.clientWidth ||
							document.body.clientWidth;
	height = window.innerHeight ||
							 document.documentElement.clientHeight ||
							 document.body.clientHeight;

	if (width > 1370) {
    lineClamp = "11.875rem";
    //lineClamp = 10;
  }
  else if (width > 920) {
    lineClamp = "8.3125rem";
    //lineClamp = 7;
    founders.classList.remove("flex-col");
    founders.classList.add("flex-row");
		founder.forEach(el => {
      el.classList.remove("flex-row")
      el.classList.add("flex-col");
    });

    volunteers.forEach(el => {
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
    });
    position.forEach(el => {
      el.classList.remove("flex-row");
      el.classList.remove("wrap");
      el.classList.add("flex-col");
    });
	}
	else if (width > 530) {
    lineClamp = "4.75rem";
    //lineClamp = 4;
    founders.classList.remove("flex-row");
    founders.classList.add("flex-col");
		founder.forEach(el => {
      el.classList.remove("flex-col")
      el.classList.add("flex-row");
    });

    volunteers.forEach(el => {
      el.classList.remove("flex-row");
      el.classList.add("flex-col");
    });
    position.forEach(el => {
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
      el.classList.add("wrap");
    });
	}
  else {
    lineClamp = "4.75rem";
    //lineClamp = 4;
    founders.classList.add("flex-col");
    founders.classList.remove("flex-row");
		founder.forEach(el => {
      el.classList.remove("flex-row")
      el.classList.add("flex-col");
    });

    volunteers.forEach(el => {
      el.classList.remove("flex-row");
      el.classList.add("flex-col");
    });
    position.forEach(el => {
      el.classList.remove("flex-col");
      el.classList.add("flex-row");
      el.classList.add("wrap");
    });
  }
  

  founderSpeech.forEach(el => {
    if (el.style.height != "initial")
      el.style.height = lineClamp;
    /*if (el.style.webkitLineClamp != "initial")
      el.style.webkitLineClamp = lineClamp;*/
  });

  volunteersTable.forEach(element => {
    sortTable(element, 0)
  });
}

window.addEventListener("load", updateWindowSize);
window.addEventListener("resize", updateWindowSize);



readMore.forEach(el => {
  el.onclick = function() {
    if (this.previousElementSibling.style.height == "initial") {
      this.previousElementSibling.style.height = lineClamp;
      this.previousElementSibling.style.display = "block";
      this.innerHTML = "Read more&nbsp;<i class='fas fa-caret-down'></i>";
    }
    else {
      this.previousElementSibling.style.height = "initial";
      this.previousElementSibling.style.display = "flex";
      this.innerHTML = "Read less&nbsp;<i class='fas fa-caret-down fa-rotate-180'></i>";
    }
    /*if (this.previousElementSibling.style.webkitLineClamp == "initial") {
      this.previousElementSibling.style.webkitLineClamp = lineClamp;
      this.innerHTML = "Read more&nbsp;<i class='fas fa-caret-down'></i>";
    }
    else {
      this.previousElementSibling.style.webkitLineClamp = "initial";
      this.innerHTML = "Read less&nbsp;<i class='fas fa-caret-down fa-rotate-180'></i>";
    }*/
  }
});

position.forEach(element => {
  Array.prototype.slice.call(element.children).forEach(el => {
    el.onclick = function() {
      if (!this.classList.contains("active")) {
        Array.prototype.slice.call(element.children).forEach(e => {
          e.classList.remove("active");
        });
        Array.prototype.slice.call(element.nextElementSibling.children).forEach(e => {
          e.classList.remove("active");
        });
        this.classList.add("active");
        Array.prototype.slice.call(element.nextElementSibling.children)[Array.from(this.parentElement.children).indexOf(this)].classList.add("active");
      }
    }
  });
});

function sortTable(element, idx) {
  var rows, rowA, rowB;
  var switching = true, shouldSwitch;
  var dir = "asc", switchcount = 0;
  while (switching) { //Make a loop that will continue until no switching has been done
    switching = false;
    rows = element.querySelector("table").rows;
    for (var i=1; i < (rows.length-1); i++) { //Loop through all table rows (except headers)
      shouldSwitch = false;
      rowA = rows[i].getElementsByTagName("TD")[idx]; //Get the two elements you want to compare
      rowB = rows[i+1].getElementsByTagName("TD")[idx];
      if (dir == "asc") { //check if the two rows should switch place, based on the direction, asc or desc
        if (rowA.innerHTML.toLowerCase() > rowB.innerHTML.toLowerCase()) {
          shouldSwitch= true; //if so, mark as a switch and break the loop
          break;
        }
      } 
      else if (dir == "desc") {
        if (rowA.innerHTML.toLowerCase() < rowB.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); //If a switch has been marked, make the switch 
      switching = true;  //and mark that a switch has been done
      switchcount++; //Each time a switch is done, increase this count by 1
    } 
    else {
      if (switchcount == 0 && dir == "asc") { //If no switching has been done AND the direction is "asc"
        dir = "desc"; //set the direction to "desc"
        switching = true; //and run the while loop again
      }
    }
  }
}

volunteersTable.forEach(element => {
  element.querySelectorAll("th").forEach((el, idx) => {
    el.onclick = function() {
      element.querySelectorAll("i:nth-child(1)").forEach(e => { 
        if (e == this.querySelector("i:nth-child(1)")) {
          e.style.opacity = 1;
          if (e.classList.contains("fa-rotate-180"))
            e.classList.remove("fa-rotate-180");
          else
            e.classList.add("fa-rotate-180");
        }
        else {
          e.style.opacity = 0;
          e.classList.remove("fa-rotate-180");
        }
      });
      sortTable(element, idx)
    }
  });
});

volunteers2.forEach(element => {
  var input, selectedIdx = element.querySelector(".table-filter select").selectedIndex;
  var rows = element.querySelector("table").getElementsByTagName("tr");
  var td, txtValue;

  function filterTable() {
    if (selectedIdx != 0) {
      // Loop through all table rows, and hide those who don't match the search query
      for (var i=0; i < rows.length; i++) {
        td = rows[i].getElementsByTagName("td")[selectedIdx-1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(input) > -1) {
            rows[i].style.display = "";
          } 
          else {
            rows[i].style.display = "none";
          }
        }
      }
    }
    else {
      var displayRow = false;
      for (var i=0; i < rows.length; i++) {
        displayRow = false;
        for (var j=0; j < rows[i].getElementsByTagName("td").length; j++) {
          td = rows[i].getElementsByTagName("td")[j];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(input) > -1) {
              rows[i].style.display = "";
              displayRow = true;
            } 
            else if (!displayRow) {
              rows[i].style.display = "none";
            }
          }
        }
      }
    }
  }

  element.querySelector(".table-filter select").onchange = function() {
    selectedIdx = element.querySelector(".table-filter select").selectedIndex;
    if (input != null) filterTable();
  }
  element.querySelector(".table-filter input").onkeyup = function() {
    input = element.querySelector(".table-filter input").value.toUpperCase();
    filterTable();
  }
});
