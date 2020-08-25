// Make your changes to store and update game state in this file
// Current game state
let gameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let turnNumber = 0;

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
  console.log("takeTurn was called with row: " + row + ", column:" + column);
  let tempArray = gameState;
  let count = 0;

  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray[i].length; j++) {
      if (tempArray[i][j] !== null) {
        count++;
      }
    }
  }

  //if board empty x turn
  if (!tempArray[row][column]) {
    if (count % 2 === 1) {
      //x turn
      tempArray[row][column] = "nought";
    } else {
      //o turn
      tempArray[row][column] = "cross";
    }
  }

  turnNumber++;
  gameState = tempArray;
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
  //from fifth turn onwards check if three same in a row/column/diagonal

  let tempArray = getBoard();
  let winner = "nobody";

  checkRow(tempArray)
  checkColumn(tempArray)
  checkDiagonal(tempArray)

  if (winner !== "nobody") {
    return winner;
  } else if (winner === "nobody" && turnNumber === 9) {
    return winner;
  }

  //if yes return winner
  //resetGame()
  console.log("checkWinner was called");
}

function checkRow(tempArray){

  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length; j++) {
      if (j === 0) {
        if (
          tempArray[i][j] === tempArray[i][j + 1] &&
          tempArray[i][j + 1] === tempArray[i][j + 2]
        ) {
          //return winner
          if (tempArray[i][j] === "cross") {
            winner = "crosses";
          } else if (tempArray[i][j] === "nought") {
            winner = "noughts";
          } else {
            winner = "nobody";
          }
          //  winner =  tempArray[i][j] === "cross" ?  "crosses" : (tempArray[j][i] === "nought" ? "noughts\" : "nobody")
        }
      }
    }
  }

}
function checkColumn(tempArray) {

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        if (
          tempArray[j][i] === tempArray[j + 1][i] &&
          tempArray[j + 1][i] === tempArray[j + 2][i]
        ) {
          if (tempArray[j][i] === "cross") {
            winner = "crosses";
          } else if (tempArray[j][i] === "nought") {
            winner = "noughts";
          } else {
            winner = "nobody";
          }
          // winner =  tempArray[j][i] === "cross" ?  "crosses" : (tempArray[j][i] === "nought" ? "noughts" : "nobody")
        }
      }
    }
  }
}


function checkDiagonal(tempArray) {
let winner
  if (
    tempArray[0][0] === tempArray[1][1] &&
    tempArray[0][0] === tempArray[2][2]
  ) {
    winner =
      tempArray[0][0] === "cross"
        ? "crosses"
        : tempArray[0][0] === "nought"
        ? "noughts"
        : "nobody";
  }
  if (
    tempArray[0][2] === tempArray[1][1] &&
    tempArray[1][1] === tempArray[2][0]
  ) {
    winner =
      tempArray[1][1] === "cross"
        ? "crosses"
        : tempArray[1][1] === "nought"
        ? "noughts"
        : "nobody";
  }
return winner
}


// Set the game state back to its original state to play another game.
function resetGame() {
  // console.log("resetGame was called");
  gameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  turnNumber = 0;
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
  console.log("getBoard was called");
  return gameState;
}

module = module || {};
module.exports = {
  takeTurn: takeTurn,
  checkWinner: checkWinner,
  checkRow: checkRow,
  checkColumn: checkColumn, 
  checkDiagonal: checkDiagonal,
  getBoard: getBoard,
  resetGame: resetGame
}
