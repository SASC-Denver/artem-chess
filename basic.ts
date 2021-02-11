export var basicVar = "basic";

var tdElements = document.getElementsByTagName("TD");

var joinButton = document.getElementById("join");

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

joinButton.addEventListener("click", join);

function join(event) {
  var playerNameText: HTMLInputElement = document.getElementById(
    "playerName"
  ) as any;
  put("join", {
    playerName: playerNameText.value
  });
  var enterDiv: HTMLElement = document.getElementById("enter") as any;
  enterDiv.classList.add("hidden");

  var waitingDiv: HTMLElement = document.getElementById("waiting") as any;

  waitingDiv.classList.remove("hidden");
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

async function put(url, data) {
  // Awaiting fetch which contains method,
  // headers and content-type and body
  const response = await fetch("http://159.65.177.191:8080/api/" + url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Referrer-Policy": "origin"
    },
    body: JSON.stringify(data)
  });

  // Awaiting response.json()
  const resData = await response.json();

  // Return response data
  return resData;
}
