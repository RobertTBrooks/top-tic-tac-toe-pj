//Where all the game logic should happen.



export function StartGame(player1, player2, gameBoard) {

  const player1Name = player1.PlayersGameName();
  let player1Wins, player1Loses = player1.GetPlayerScore();

  const player2Name = player2.PlayersGameName();
  let player2Wins, player2Loses = player2.GetPlayerScore();

  const p1Panel = document.getElementsByClassName('player-one-panel');
  const p2Panel = document.getElementsByClassName('player-two-panel');


}
