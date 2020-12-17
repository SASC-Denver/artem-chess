export var basicVar = "basic";

var tdElements = document.getElementsByTagName("TD");

var board = [
  //
  [null, null, null], //
  [null, null, null], //
  [null, null, null] //
];

if (board[2][2]) {
  // alert(board[2][2]);
}

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}

var isTheClickForAnO = false;

function handleClick(event) {
  var targetTd = event.target;
  if (isTheClickForAnO) {
    targetTd.innerHTML = "O";
    targetTd.classList.add("O");
    isTheClickForAnO = false;
  } else {
    targetTd.innerHTML = "X";
    targetTd.classList.add("X");
    isTheClickForAnO = true;
  }
}
