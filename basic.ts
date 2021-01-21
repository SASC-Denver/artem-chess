export var basicVar = "basic";

var tdElements = document.getElementsByTagName("TD");

export var board = [
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
  for (var winningCondition of winningConditions) {
    var winningValue = whoWonACondition(winningCondition);
    if (winningValue) {
      return winningValue;
    }
  }
  return null;
}

function whoWonACondition(winningCondition) {
  var firstCell = winningCondition[0];
  var firstValue = board[firstCell.row][firstCell.column];
  for (var i = 1; i < winningCondition.length; i++) {
    var nextCell = winningCondition[i];
    var nextValue = board[nextCell.row][nextCell.column];
    if (firstValue !== nextValue) {
      return null;
    }
  }
  return firstValue;
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
  var winningValue = whoWon();
  if (winningValue) {
    alert('The "' + winningValue + '"s have won!');
  }
}
