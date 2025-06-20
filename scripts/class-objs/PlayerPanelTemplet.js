export class PanelTemplet {

  MakePanel(playerName, playerWins, playerLoses) {

    return `    
      <div id="player-one-title" class="player-title">
        <h1 id="p1-name">Player One: ${playerName}</h1>
        <div id="player-one-output">
          <p id="player-one-wins">Total Wins!: ${playerWins}</p>
          <p id="player-one-loses">Total Loses..: ${playerLoses}</p>

        </div>

      </div>
  `
  }
}
