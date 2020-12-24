export var extraVar = "extraVar";

var tdElements = document.getElementsByTagName("TD");

document.getElementById("resetButton").addEventListener("click", function() {
  for (var tdElement of tdElements) {
    tdElement.innerHTML = "";
    tdElement.classList.remove("O");
    tdElement.classList.remove("X");
  }
});


var test = 1;
