interface Player {
  name: string;
  id: string;
}

enum GameState {
  PENDING,
  STARTED,
  FINISHED
}

interface Game {
  board: boolean[][];
  id: string;
  lastMoveTime: number;
  xMovesNext: boolean;
  players: Player[];
  state: GameState;
}

interface ErrorResponse {
  error: string;
}

interface GameCheckRequest {
  gameId: string;
  playerId: string;
}

interface GameCheckResponse {
  board: boolean[][];
  lastMoveTime: number;
  otherPlayerName: string;
  state: GameState;
  yourMove: boolean;
  yourSign: string;
}

interface JoinRequest {
  playerName: string;
}

interface JoinResponse {
  board: boolean[][];
  gameId: string;
  otherPlayerName: string;
  playerId: string;
  state: GameState;
  yourMove: boolean;
  yourSign: string;
}

interface MoveRequest {
  gameId: string;
  playerId: string;
  move: {
    column: number;
    row: number;
  };
  state: GameState;
}

interface MoveResponse {
  state: GameState;
  board: boolean[][];
}

interface MyGame {
  game: Game;
  myMove: boolean;
  mySign: string;
  otherPlayerName: string;
  playerId: string;
}

var myGame: MyGame;

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

  var enterDiv: HTMLElement = document.getElementById("enter") as any;

  var waitingDiv: HTMLElement = document.getElementById("waiting") as any;

  var gameDiv: HTMLElement = document.getElementById("game") as any;

  var checkIntervalId;

  put("join", {
    playerName: playerNameText.value
  }).then((response: JoinResponse) => {
    switch (response.state) {
      case GameState.STARTED: {
        waitingDiv.classList.add("hidden");
        gameDiv.classList.remove("hidden");
        break;
      }
      case GameState.PENDING: {
        break;
      }
      default: {
        return;
      }
    }

    checkIntervalId = setInterval(() => {
      var now = new Date().getTime();
      if (now - 60 * 60 * 1000 < myGame.game.lastMoveTime) {
        alert("Game timed out");
        enterDiv.classList.remove("hidden");
        gameDiv.classList.add("hidden");
        waitingDiv.classList.add("hidden");
      }
      if (myGame.myMove) {
        return;
      }

      put("check", {
        playerName: playerNameText.value
      }).then((response: GameCheckResponse) => {
        myGame.myMove = response.yourMove;
      });
    }, 3000);

    myGame = {
      game: {
        board: response.board,
        id: response.gameId,
        lastMoveTime: new Date().getTime(),
        players: null,
        state: response.state,
        xMovesNext: null
      },
      myMove: response.yourMove,
      mySign: response.yourSign,
      otherPlayerName: response.otherPlayerName,
      playerId: response.playerId
    };
  });
  enterDiv.classList.add("hidden");

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

async function put<T>(url, data): Promise<T> {
  // Awaiting fetch which contains method,
  // headers and content-type and body
  const response = await fetch(
    "https://box.dataindependence.net:8080/tic-tac-toe/" + url,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Referrer-Policy": "origin"
      },
      body: JSON.stringify(data)
    }
  );

  // Awaiting response.json()
  const resData = await response.json();

  // Return response data
  return resData as T;
}
