export var basicVar = "basic";

var tdElements = document.getElementsByTagName("TD");

var board = [
  //
  [null, null, null], // rowIndex="0"
  [null, null, null], // rowIndex="1"
  [null, null, null] // rowIndex="2"
];

var winningConditions = [
  [{ row: 0, column: 0 }, { row: 1, column: 0 }, { row: 2, column: 0 }],
  [{ row: 0, column: 1 }, { row: 1, column: 1 }, { row: 2, column: 1 }],
  [{ row: 0, column: 2 }, { row: 1, column: 2 }, { row: 2, column: 2 }],
  [{ row: 0, column: 0 }, { row: 0, column: 1 }, { row: 0, column: 2 }],
  [{ row: 1, column: 0 }, { row: 1, column: 1 }, { row: 1, column: 2 }],
  [{ row: 2, column: 0 }, { row: 2, column: 1 }, { row: 2, column: 2 }],
  [{ row: 0, column: 0 }, { row: 1, column: 1 }, { row: 2, column: 2 }],
  [{ row: 0, column: 2 }, { row: 1, column: 1 }, { row: 0, column: 2 }]
];

function whoWon() {
  // return 'X' 'O' or null
  return null;
}

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}

var isTheClickForAnO = false;

function handleClick(event) {
  var targetTd: HTMLTableCellElement = event.target;

  var rowIndex = parseInt(targetTd.parentElement.getAttribute("rowIndex"));
  var columnIndex = parseInt(targetTd.getAttribute("columnIndex"));

  if (board[rowIndex][columnIndex]) {
    // There is already a value on the board
    return;
  }

  var value;
  if (isTheClickForAnO) {
    value = "O";
    isTheClickForAnO = false;
  } else {
    value = "X";
    isTheClickForAnO = true;
  }

  board[rowIndex][columnIndex] = value;

  targetTd.innerHTML = value;
  targetTd.classList.add(value);
  whoWon();
}
