//This module takes in the main boards name example .game-board than grabs all the divs inside
//and lables them and turns them into an obj to use in the game.
//set the board to be blank, changes will be made during the game state.
//using ClearBoard will just reset all the spaces to blank again.

const winningCondition = {
  'topRow': { "top-L": '', "top-C": '', "top-R": '' },
  'midRow': { "cnt-L": '', "cnt-C": '', "cnt-R": '' },
  'btmRow': { "btm-L": '', "btm-C": '', "btm-R": '' },
  'lftColum': { "top-L": '', "cnt-L": '', "btm-L": '' },
  'midColum': { "top-C": '', "mid-C": '', "btm-C": '' },
  'rgtColum': { "top-R": '', "cnt-R": '', "btm-R": '' },
  'tpLftToBtmRgt': { "top-L": '', "cnt-C": '', "btm-R": '' },
  'btmLftToTpRgt': { "btm-L": '', "cnt-C": '', "top-R": '' },
}

let currentBoard = winningCondition;
let hasWinner = ['', false];
export class GameBoard {
  constructor() {
    this.gameBoard = {};
  }

  ClearBoard() {
    if (this.gameBoard.length !== 0) {
      this.gameBoard.forEach(cellId => {
        this.gameBoard[cellId.innerHTML] = "";
      });
      return this.gameBoard;
    }
  }

  CreateBoard() {

    return `
        <div id="top-L"></div>
        <div id="top-C"></div>
        <div id="top-R"></div>
        <div id="cnt-L"></div>
        <div id="cnt-C"></div>
        <div id="cnt-R"></div>
        <div id="btm-L"></div>
        <div id="btm-C"></div>
        <div id="btm-R"></div>
`
  }

  UpdateBoard(selection, playerPiece) {
    if (!hasWinner[1]) {

      let boxSelection = document.getElementById(`${selection}`);
      console.log(boxSelection.innerHTML);
      if (boxSelection.innerHTML.length === 0) {
        GameWonState(selection, playerPiece, boxSelection);
        return true;
      } else {
        return false;
      }


    }
  }

};


function GameWonState(selected, playerPiece, boxSelection) {

  console.log(currentBoard);

  for (let line of Object.values(currentBoard)) {
    console.log(`${selected}`);
    if (line[`${selected}`] == '') {
      line[`${selected}`] = `${playerPiece}`;
      boxSelection.innerHTML = `${playerPiece}`;
      console.log(line)
    }

    let matching = 0;
    for (let val of Object.values(line)) {
      if (val === `${playerPiece}`) {
        matching++
      }
      if (matching >= 3) {
        console.log('Winner!')
        hasWinner = [`${playerPiece}`, true]
      }

    }

  }
}





