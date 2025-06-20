export class PlayerTemplet {

  Player1Templet() {
    return `
        <form id="form-data">
        <p id="warning" class="remove-pad-marg"></p>
          <fieldset>
            <label for="player-name">Player One Enter your Name:</label>
            <input type="text" name="player-name" value="" maxlength="16" placeholder="Enter your name">
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
    `
  }

  Player2Templet(player1Option) {
    let player2Is = '';

    if (player1Option === 'X') {
      player2Is = `
            <span>
              X<input class="option-select" type="radio" name="option-select" value="X" disabled>
              O<input class="option-select" type="radio" name="option-select" value="O" checked>
            </span>
      `

    } else {

      player2Is = `
            <span>
              X<input class="option-select" type="radio" name="option-select" value="X" checked>
              O<input class="option-select" type="radio" name="option-select" value="O" disabled>
            </span>
      `
    }

    return `
        <form id="form-data">
        <p id="warning" class="remove-pad-marg"></p>
          <fieldset>
            <label for="player-name">Player Two Enter your Name:</label>
            <input type="text" name="player-name" value="" maxlength="16" placeholder="Enter your name">
            <label for="option-select">Pick X or O's</label>
            ${player2Is}
            <div class="button-box">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>

            </div>
          </fieldset>
        </form>
`
  }

  WinnerIs(winnerData) {


    return `
          
        <form id="form-data">
        <p id="warning" class="remove-pad-marg"></p>
          <fieldset>
            <label id="winner" for="player-name">${winnerData}: Has Won!</label>

            <div class="button-box">
              <button id="play-again-btn" type="button">Play Again</button>
              <button id="reset-game-btn" type="button">Reset Game</button>

            </div>
          </fieldset>
    `
  }

  DrawState() {

    return `
          
        <form id="form-data">
        <p id="warning" class="remove-pad-marg"></p>
          <fieldset>
            <label id="winner" for="player-name">Draw!!: Tray Again?</label>

            <div class="button-box">
              <button id="play-again-btn" type="button">Play Again</button>
              <button id="reset-game-btn" type="button">Reset Game</button>

            </div>
          </fieldset>
    `
  }
};
