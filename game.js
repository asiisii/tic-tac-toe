class Game {
  constructor(playerOneName, playerTwoName) {
    this.player1 = new Player(playerOneName);
    this.player2 = new Player(playerTwoName);
    this.isPlayer1next = true;
    this.isGameOn = true;
  }

  turnGameOff() {
    this.isGameOn = !this.isGameOn;
  }

  changeToName(letter) {
    if (letter === 'X') {
      this.player1.calculateWins();
      player1Score.innerText = this.player1.countWins;
      this.player1.saveWinsToStorage();
      return this.player1.name;
    }else {
      this.player2.calculateWins();
      player2Score.innerText = this.player2.countWins;
      this.player2.saveWinsToStorage();
      return this.player2.name;
    }
  }

  handleWin(letter) {
    if (letter === 'x') {
      displayWin(letter);
    }else {
      displayWin(letter);
    }
  }

  checkGameStatus() {
    var firstBox = boxes[0].classList[2];
    var secondBox = boxes[1].classList[2];
    var thirdBox = boxes[2].classList[2];
    var fourthBox = boxes[3].classList[2];
    var fifthBox = boxes[4].classList[2];
    var sixthBox = boxes[5].classList[2];
    var seventhBox = boxes[6].classList[2];
    var eighthBox = boxes[7].classList[2];
    var ninthBox = boxes[8].classList[2];

    if (firstBox && firstBox === secondBox && firstBox === thirdBox) {
      this.handleWin(firstBox);
    }else if (fourthBox && fourthBox === fifthBox && fourthBox === sixthBox) {
      this.handleWin(fourthBox);
    }else if (seventhBox && seventhBox === eighthBox && seventhBox === ninthBox) {
      this.handleWin(seventhBox);
    }else if (firstBox && firstBox === fourthBox && firstBox === seventhBox) {
      this.handleWin(firstBox);
    }else if (secondBox && secondBox === fifthBox && secondBox === eighthBox) {
      this.handleWin(secondBox);
    }else if (thirdBox && thirdBox === sixthBox && thirdBox === ninthBox) {
      this.handleWin(thirdBox);
    }else if (firstBox && firstBox === fifthBox && firstBox === ninthBox) {
      this.handleWin(firstBox);
    }else if (thirdBox && thirdBox === fifthBox && thirdBox === seventhBox) {
      this.handleWin(thirdBox);
    }else if (firstBox && secondBox && thirdBox && fourthBox && fifthBox &&
      sixthBox && seventhBox && eighthBox && ninthBox ) {
      displayResult.innerText = `It's a draw!!!!`;
      displayResult.classList.add('display');
      this.resetBoard();
    }
    this.turnGameOff();
  }

  getPlayerNameAndScore() {
    playerOne.innerText = `${this.player1.name}`;
    playerTwo.innerText = `${this.player2.name}`;
    player1Score.innerText = this.player1.countWins;
    player2Score.innerText = this.player2.countWins;
    return;
  }

  resetPlayerInfo() {
    player1Score.innerText = 0;
    player2Score.innerText = 0;
    this.player1.countWins = 0;
    this.player2.countWins = 0;
    player1Name.value = "";
    player2Name.value = "";
    failMessage.innerText = "";
  }

  removeBorder() {
    rightImg.classList.remove('img-border');
    leftImg.classList.remove('img-border');
  }

  resetBoard() {
    if (!this.turnGameOff()) {
      setTimeout(function() {
          displayResult.classList.remove('display');
          removeMarks();
      }, 1500);
    }
  }
}
