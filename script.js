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
