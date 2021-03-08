class Game {
  constructor(playerOneName,playerTwoName) {
    this.player1 = new Player(playerOneName);
    this.player2 = new Player(playerTwoName);
    this.isPlayer1next = true;
    this.isGameOn = true;
  }

}
