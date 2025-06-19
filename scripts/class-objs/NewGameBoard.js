//This module takes in the main boards name example .game-board than grabs all the divs inside
//and lables them and turns them into an obj to use in the game.
//set the board to be blank, changes will be made during the game state.
//using ClearBoard will just reset all the spaces to blank again.


export class NewGameBoard {
  constructor(boardName) {
    this.boardName = boardName;
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
    let cells = document.querySelectorAll(this.boardName);

    cells.forEach(cellId => {
      this.gameBoard[cellId.id] = cellId;
    });

    return this.gameBoard
  }
};
