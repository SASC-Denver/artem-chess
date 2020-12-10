import "./style.css";

var tdElements = document.getElementsByTagName("TD");

var board = [
  //
  ["X", null, null], //
  ["X", "O", null], //
  ["X", "O", null] //
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
