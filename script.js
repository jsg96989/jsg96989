console.log("hi");

var a = 0;
function changegrid() {
  if (a == 0){
    document.getElementById("grid").className = "grid2";
    console.log(a);
    a = 1;
  } else if (a == 1){
    document.getElementById("grid").className = "grid";
    console.log(a);
    a = 0;
  }
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


