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
  var a = "<button class='dropdown-btn'>Dropdown 
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-container'>
              <iframe src='https://open.spotify.com/embed/playlist/5mqgkKMyZ1MNRYrNyF6P4e' width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>";
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