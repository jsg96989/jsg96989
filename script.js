console.log("hi");

var a = 0;
function changegrid() {
  if (a == 0){
    document.getElementById("grid").className = "grid2";
    a = 1;
  }
  if (a == 1){
    document.getElementById("grid").className = "grid";
    a = 0;
  }
}
