//Where all the game logic should happen.

import { GameBoard } from './GameBoard.js';
import { NewPlayer } from './NewPlayer.js';
import { PlayerTemplet } from './PlayerInputTemplet.js';
import { PanelTemplet } from './PlayerPanelTemplet.js';


export function StartGame() {
  const p1Panel = document.getElementById('player-one-panel');
  const p2Panel = document.getElementById('player-two-panel');
  const board = document.getElementById('game-board');
  const popUp = document.getElementById('pop-up');
  const playerTemplet = new PlayerTemplet;
  const panelTemplet = new PanelTemplet;
  let player1 = {};
  let player2 = {};
  let currentGameBoard = new GameBoard;
  const playerInput = document.getElementById('form-data');
  let player1Set = false;
  let player2Set = false;

  let p1Turn = true;
  let p2Turn = false;
  //board.innerHTML = gameBoard;

  popUp.style.display = 'flex';

  playerInput.innerHTML = playerTemplet.Player1Templet();


  playerInput.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!player1Set && !player2Set) {
      player1 = makePlayer(1, playerInput)
      player1Set = true;
      playerInput.innerHTML = playerTemplet.Player2Templet(player1.PlayerPieces());
      return;
    }

    if (player1Set && !player2Set) {
      player2 = makePlayer(2, playerInput)
      player2Set = true;
    }

    if (player1Set && player2Set) {
      popUp.style.display = 'none';
    }


    p1Panel.innerHTML = panelTemplet.MakePanel(player1.PlayerName(), player1.GetPlayerWins(), player1.GetPlayerLoses());
    p2Panel.innerHTML = panelTemplet.MakePanel(player2.PlayerName(), player2.GetPlayerWins(), player2.GetPlayerLoses());


    console.log(currentGameBoard.CreateBoard());

    board.innerHTML = currentGameBoard.CreateBoard();

  });

  board.addEventListener('click', (e) => {
    e.preventDefault()

    console.log(e.target.id);
    if (p1Turn) {
      let choose = currentGameBoard.UpdateBoard(e.target.id, player1.PlayerPieces());
      console.log(choose)
      if (choose) {
        p1Turn = false;
        p2Turn = true;
      }
      choose = false;
      return;
    }

    if (p2Turn) {
      let choose = currentGameBoard.UpdateBoard(e.target.id, player2.PlayerPieces());
      if (choose) {
        p1Turn = true;
        p2Turn = false;
      }
      choose = false;
      return;
    }


  });

};
function makePlayer(playerNumber) {

  const playerInput = document.getElementById('form-data');
  const formData = document.getElementById('form-data');
  const warning = document.getElementById('warning');
  const playerData = new FormData(formData);
  const playersName = playerData.get('player-name');
  let playerOption = playerInput.querySelector('.option-select:checked').value;
  console.log(playerOption)
  if (playersName.length <= 3) {
    warning.innerHTML = "<strong>Name must be longer than 3 Characters</strong>";
    return
  };

  if (playersName.length > 3) {
    return new NewPlayer(playersName, playerNumber, playerOption)
  };

  formData.reset();
}
