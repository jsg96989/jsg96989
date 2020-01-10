var dates = [
  "1/10/2020",
  "1/11/2020",
  "1/12/2020",
  "1/13/2020",
];

var links = [
  "www.google.com",
  "www.google.com",
  "www.google.com",
  "www.google.com",
];


function loadPreviousEpisodes() {
  
}

loadPreviousEpisodes();




var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}