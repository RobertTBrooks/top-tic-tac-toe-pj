// Makes a NewPlayer
//


export class NewPlayer {
  constructor(playerName, playerNumber, playerPieces) {
    this.playerName = playerName;
    this.playerNumber = playerNumber;
    this.playerPieces = playerPieces;
    this.playerWins = 0;
    this.playerLoses = 0;
  }

  GetPlayerWins() {
    return this.playerWins;
  }

  GetPlayerLoses() {
    return this.playerLoses;
  }

  PlayerWon() {
    this.playerWins++;
  }

  PlayerLost() {
    this.playerLoses++;
  }

  PlayerPieces() {
    return this.playerPieces;
  }

  PlayerName() {
    return this.playerName;
  }

}
