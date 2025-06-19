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

  GetPlayerScore() {
    return this.playerWins, this.playerLoses;
  }

  PlayerWon() {
    return this.playerWins++;
  }

  PlayerLost() {
    return this.playerLoses++;
  }

  PlayerPlaces() {
    return this.playerPieces;
  }

  PlayersGameName() {
    return `Player${this.playerNumber} ${this.playerName}`;
  }
}
