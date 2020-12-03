import "./style.css";

var tdElements = document.getElementsByTagName("TD");

var board = [
  ['X', null, 'Z'],
  [null, 'O', null],
  ['W', null, 'Y']
];

alert(board[0][0]);

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