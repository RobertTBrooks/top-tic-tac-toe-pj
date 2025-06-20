// Refactored game logic using a class-based approach
// Ran into game logic issues when trying to reset the bored in the dom and in script.
// So took the easy path and Refactored to a class base.
import { GameBoard } from './GameBoard.js';
import { NewPlayer } from './NewPlayer.js';
import { PlayerTemplet } from './PlayerInputTemplet.js';
import { PanelTemplet } from './PlayerPanelTemplet.js';

export function StartGame() {
  new CurrentGame();
}

class CurrentGame {
  constructor() {
    // DOM conntentions.
    this.p1Panel = document.getElementById('player-one-panel');
    this.p2Panel = document.getElementById('player-two-panel');
    this.board = document.getElementById('game-board');
    this.playerInput = document.getElementById('form-data');
    this.popUp = document.getElementById('pop-up');

    // Module Connections
    this.playerTemplet = new PlayerTemplet();
    this.panelTemplet = new PanelTemplet();
    this.currentGameBoard = new GameBoard();

    // pre set variables.
    this.player1 = null;
    this.player2 = null;
    this.p1Turn = true;
    this.p2Turn = false;
    this.gameOver = false;
    this.hasWinner = ['', false];
    this.drawState = false;

    // Initialize
    this.setup();
  }

  // Setup Players and their Pieces and set the board.
  setup() {
    this.popUp.style.display = 'flex';
    this.playerInput.innerHTML = this.playerTemplet.Player1Templet();
    this.board.innerHTML = this.currentGameBoard.CreateBoard();

    // Learned about bind() which helped. its working so I'm guess its right?
    this.playerInput.addEventListener('submit', this.handlePlayerSubmit.bind(this));
    this.board.addEventListener('click', this.handleBoardClick.bind(this));
  }
  // bound player submition.
  handlePlayerSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.playerInput);
    const playersName = formData.get('player-name');
    const warning = document.getElementById('warning');
    const playerOption = this.playerInput.querySelector('.option-select:checked')?.value;

    if (playersName.length <= 3) {
      warning.innerHTML = '<strong>Name must be longer than 3 Characters</strong>';
      return;
    }

    if (!this.player1) {
      this.player1 = new NewPlayer(playersName, 1, playerOption);
      this.playerInput.innerHTML = this.playerTemplet.Player2Templet(this.player1.PlayerPieces());
      return;
    }

    if (!this.player2) {
      this.player2 = new NewPlayer(playersName, 2, playerOption);
      this.popUp.style.display = 'none';
      this.updatePanels();
    }
  }


  // Updates player score bored and names.
  updatePanels() {
    this.p1Panel.innerHTML = this.panelTemplet.MakePanel(this.player1.PlayerName(), this.player1.GetPlayerWins(), this.player1.GetPlayerLoses());
    this.p2Panel.innerHTML = this.panelTemplet.MakePanel(this.player2.PlayerName(), this.player2.GetPlayerWins(), this.player2.GetPlayerLoses());
  }


  // Listens to all the board click inputs and tracks who went as well as loops if the click 
  // was an invalid option such as a piece already placed in that spot.
  // main logic is on the GameBoard Module.
  handleBoardClick(e) {
    e.preventDefault();
    const id = e.target.id;
    if (this.gameOver || !id) return;

    let currentPlayer = this.p1Turn ? this.player1 : this.player2;
    let updated = this.currentGameBoard.UpdateBoard(id, currentPlayer.PlayerPieces());
    this.drawState = this.currentGameBoard.DrawState();

    if (updated) {
      this.hasWinner = this.currentGameBoard.WonState();
      this.p1Turn = !this.p1Turn;
      this.p2Turn = !this.p2Turn;
    }

    if (this.hasWinner[1]) {
      this.gameOver = true;
      const winner = (this.player1.PlayerPieces() === this.hasWinner[0]) ? this.player1.PlayerName() : this.player2.PlayerName();
      this.showGameOver(winner);
    }
    if (this.drawState && !this.hasWinner[1]) {
      this.gameOver = true;
      this.showGameOver('draw');
    }
  }


  // Logic for handling Game over screen.
  showGameOver(winner) {
    if (winner === 'draw') {
      this.playerInput.innerHTML = this.playerTemplet.DrawState();
    } else {

      this.playerInput.innerHTML = this.playerTemplet.WinnerIs(winner);
      this.player1.PlayerName() === winner ? this.player1.PlayerWon() : this.player2.PlayerWon();
      this.player1.PlayerName() !== winner ? this.player1.PlayerLost() : this.player2.PlayerLost();
      this.updatePanels();

    }
    this.popUp.style.display = 'flex';

    const playAgainBtn = document.getElementById('play-again-btn');
    const resetGameBtn = document.getElementById('reset-game-btn');

    playAgainBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.resetBoardOnly();
    });

    resetGameBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const dom = document.getElementById('dom-body');
      dom.innerHTML = this.panelTemplet.MakeNewDom();
      StartGame();
    });
  }


  // used for when you want to play again with the same 2 players, will just reset whats needed.
  resetBoardOnly() {
    this.currentGameBoard.ClearBoard();
    this.board.innerHTML = this.currentGameBoard.CreateBoard();
    this.gameOver = false;
    this.hasWinner = ['', false];
    this.p1Turn = true;
    this.p2Turn = false;
    this.drawState = false;

    this.board.addEventListener('click', this.handleBoardClick.bind(this));
    this.popUp.style.display = 'none';
  }

}

