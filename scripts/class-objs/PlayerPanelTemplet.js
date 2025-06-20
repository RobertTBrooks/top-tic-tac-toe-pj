// Just a module to hold templates of HTML that i can use quick to inject in.
// to reset the DOM or makes changes. 


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

  MakeNewDom() {
    return `
  <div class="grid-wrapper remove-pad-marg">
    <!-- Top banner -->
    <div class="top-banner remove-pad-marg">
      <div class="title remove-pad-marg">
        <div>
          <img src="favicon.ico" alt="sop logo">
          <h1>Welcome to Potato Tic-Tac Toe!</h1>
        </div>
      </div>
    </div>

    <!-- Player one -->
    <div id="player-one-panel" class="panel-style">
      <div id="player-one-title" class="player-title">
        <h1 id="p1-name">Player One</h1>
        <div id="player-one-output">
          <p id="player-one-wins">Total Wins!:</p>
          <p id="player-one-loses">Total Loses..:</p>

        </div>

      </div>
    </div>

    <!-- Game board -->
    <div class="game-board-wrapper">

      <div id="game-board">
        <div id="top-L">top-L</div>
        <div id="top-C">top-C</div>
        <div id="top-R">top-R</div>
        <div id="cnt-L">cnt-L</div>
        <div id="cnt-C">cnt-C</div>
        <div id="cnt-R">cnt-R</div>
        <div id="btm-L">btm-L</div>
        <div id="btm-C">btm-C</div>
        <div id="btm-R">btm-R</div>

      </div>
    </div>

    <!-- Player two -->
    <div id="player-two-panel" class="panel-style">

      <div id="player-two-title" class="player-title">
        <h1 id="p2-name">Player Two</h1>
        <div id="player-two-output">
          <p id="player-two-wins">Total Wins!:</p>
          <p id="player-two-loses">Total Loses..:</p>

        </div>
      </div>
    </div>
    <!-- Pop up -->
    <div id="pop-up">

      <div id="player-input">
        <p id="warning" class="remove-pad-marg"></p>
        <form id="form-data">
          <fieldset>
            <label for="player-name">Player Name:</label>
            <input type="text" name="player-name" minlength="3" maxlength="16" placeholder="Enter your name">
            <label for="option-select">Pick X or O's</label>
            <span>
              X<input class="option-select" type="radio" name="option-select" value="X" checked>
              O<input class="option-select" type="radio" name="option-select" value="O">
            </span>
            <div class="button-box">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>

            </div>
          </fieldset>
        </form>

      </div>
    </div>

`
  }
}
