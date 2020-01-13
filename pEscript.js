var dates = [
  "1/10/2020",
  "1/11/2020",
  "1/12/2020",
  "1/13/2020",
];

var links = [
  "https://open.spotify.com/embed/playlist/5mqgkKMyZ1MNRYrNyF6P4e",
  "https://open.spotify.com/embed/playlist/5mqgkKMyZ1MNRYrNyF6P4e",
  "https://open.spotify.com/embed/playlist/5mqgkKMyZ1MNRYrNyF6P4e",
  "https://open.spotify.com/embed/playlist/5mqgkKMyZ1MNRYrNyF6P4e",
];


function loadPreviousEpisodes() {
  var HTML = '';
  for (var i = 0; i < 4; i++) {
    HTML += '<button class="dropdown-btn" style="color:black;">' + dates[i] + '<i class="fa fa-caret-down"></i></button><div class="dropdown-container"><iframe src="' + links[i] + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>';
  }
  document.getElementById("allTheStuff").innerHTML = HTML;
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



window.onscroll = function() {
  myFunction()
};

var SGDLogo = document.getElementById("SGDLogo");
var Logo = document.getElementById("bar").offsetTop;

function myFunction() {
  if (window.pageYOffset >= Logo) {
    if (SGDLogo.innerHTML == ""){
      SGDLogo.innerHTML = '<a href="https://theprogressreport.glitch.me/"><button class="w3-bar-item w3-button w3-red w3-hover-red w3-animate-left"><txt href="https://theprogressreport.glitch.me/" style="color:white;">The Progess Report</txt></button></a>';
    }
  } else {
    SGDLogo.innerHTML = "";
  }
}



document.getElementById("mySidebar").style.display = "none";

function openDropdown() {
  if (document.getElementById("mySidebar").style.display != "none"){
    document.getElementById("mySidebar").style.display = "none";
    //document.getElementById("barM").style.display = "block";
  } else {
    document.getElementById("mySidebar").style.display = "block";
    //document.getElementById("barM").style.display = "none";
  }
}

function closeDropdown() {
  document.getElementById("mySidebar").style.display = "none";
  //document.getElementById("barM").style.display = "block";
  //window.scrollTo(0, scrollPos);
}

