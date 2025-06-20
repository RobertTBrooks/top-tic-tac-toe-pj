//This module takes in the main boards name example .game-board than grabs all the divs inside
//and lables them and turns them into an obj to use in the game.
//set the board to be blank, changes will be made during the game state.
//using ClearBoard will just reset all the spaces to blank again.
export class GameBoard {
  constructor() {
    this.gameBoard = {};
    this.draw = false;
    this.currentBoard = {};
    this.hasWinner = ['', false];
  }

  CleanWinConditions() {
    return {
      'topRow': { "top-L": '', "top-C": '', "top-R": '' },
      'midRow': { "cnt-L": '', "cnt-C": '', "cnt-R": '' },
      'btmRow': { "btm-L": '', "btm-C": '', "btm-R": '' },
      'lftColum': { "top-L": '', "cnt-L": '', "btm-L": '' },
      'midColum': { "top-C": '', "mid-C": '', "btm-C": '' },
      'rgtColum': { "top-R": '', "cnt-R": '', "btm-R": '' },
      'tpLftToBtmRgt': { "top-L": '', "cnt-C": '', "btm-R": '' },
      'btmLftToTpRgt': { "btm-L": '', "cnt-C": '', "top-R": '' },
    }

  }

  ClearBoard() {
    this.hasWinner = ['', false];
    this.draw = false;
    this.currentBoard = this.CleanWinConditions();
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

  CreateBoard() {
    this.currentBoard = this.CleanWinConditions();

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
    if (!this.hasWinner[1]) {

      this.boxSelection = document.getElementById(`${selection}`);
      if (this.boxSelection.innerHTML.length === 0) {
        this.GameBoardState(selection, playerPiece, this.boxSelection);
        return true;
      } else {
        return false;
      }


    }
  }

  DrawState() {
    if (this.draw) {
      return true;
    }
  }

  WonState() {
    if (this.hasWinner[1]) {
      return this.hasWinner;
    } else {
      return this.hasWinner;
    }

  }
  GameBoardState(selected, playerPiece, boxSelection) {
    let boardFull = 0;

    for (let line of Object.values(this.currentBoard)) {
      if (line[`${selected}`] == '') {
        line[`${selected}`] = `${playerPiece}`;
        boxSelection.innerHTML = `<img class="pieces" src="./images/${playerPiece}.png" >`;
      }

      let matching = 0;
      for (let val of Object.values(line)) {
        if (val === `${playerPiece}`) {
          matching++
        }
        if (matching >= 3) {
          this.hasWinner = [`${playerPiece}`, true]
        }
        console.log(val);
        if (val === 'X' || val === 'O') {
          boardFull++
        }
      }

    }
    console.log(boardFull);
    if (boardFull >= 23) {
      return this.draw = true;
    }
  }
};







