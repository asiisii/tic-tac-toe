var player1Score = document.getElementById('player1Score');
var player2Score = document.getElementById('player2Score');
var playerOne = document.getElementById('player1');
var playerTwo = document.getElementById('player2');
var playersTurn = document.getElementById('playersTurn');
var displayResult = document.getElementById('message');
var resetBtn = document.getElementById('resetBtn');
var boxes = document.querySelectorAll('.box');
var leftImg = document.getElementById('leftImg');
var rightImg = document.getElementById('rightImg');
var player1Name = document.getElementById('p1Input');
var player2Name = document.getElementById('p2Input');
var formInput = document.getElementById('inputForm');
var submit = document.getElementById('submit');
var failMessage = document.getElementById('failMsg');
var game = {};

window.addEventListener('load', displayForm);
submit.addEventListener('click', getPlayersName);
resetBtn.addEventListener('click', restartGame);
for(var i = 0; i < boxes.length; i++) {
  boxes.item(i).addEventListener('click', displayMarksAndTurn);
}

function getPlayersName(event) {
  event.preventDefault();
  if (!player1Name.value || !player2Name.value) {
    failMessage.innerText = `Please fill out all the fields!!`;
  }else if (player1Name.value === player2Name.value) {
    failMessage.innerText =  `Can't have same name!!`;
  }else {
    game = new Game(player1Name.value, player2Name.value);
    formInput.classList.remove('display');
    startGame();
  }
}

function displayForm() {
  formInput.classList.add('display');
}

function startGame() {
    playersTurn.innerText = `It's ${game.player1.name}'s turn`;
    leftImg.classList.add('img-border');
    game.getPlayerNameAndScore();
}

function displayMarksAndTurn(event) {
    var targetBox = event.target.classList;
    if (targetBox[2] === 'X' || targetBox[2] === 'O') {
      return;
    }

    if (game.isPlayer1next) {
      game.removeBorder();
      rightImg.classList.add('img-border');
      targetBox.add('X');
      playersTurn.innerText = `It's ${game.player2.name}'s turn`;
    }else {
      game.removeBorder();
      leftImg.classList.add('img-border');
      targetBox.add('O');
      playersTurn.innerText = `It's ${game.player1.name}'s turn`;
    }

    game.checkGameStatus();
    game.isPlayer1next = !game.isPlayer1next;
}

function displayWin(letter) {
  displayResult.classList.add('display');
  displayResult.innerText = `${game.changeToName(letter)} has won!`;
  game.resetBoard();
}

function restartGame() {
  localStorage.clear();
  game.resetPlayerInfo()
  game.removeBorder();
  startGame();
  removeMarks();
  displayForm();
}

function removeMarks() {
  for (var i = 0; i < boxes.length; i++) {
    boxes.item(i).classList.remove('X');
    boxes.item(i).classList.remove('O');
  }
}
