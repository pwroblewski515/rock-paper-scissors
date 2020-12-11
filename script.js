let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
let gameOver = false;

const playerScoreOutput = document.querySelector(".player-score");
const computerScoreOutput = document.querySelector(".computer-score");
const roundOutput = document.querySelector(".round");
const roundOutcome = document.querySelector(".round-outcome");
const playAgainButton = document.querySelector(".play-again");
const gameOutcome = document.querySelector(".game-outcome");

playerScoreOutput.textContent = getPlayerScore();
computerScoreOutput.textContent = getComputerScore();
roundOutput.textContent = getCurrentRound();

const choices = Object.freeze({
  ROCK: "Rock",
  PAPER: "Paper",
  SCISSORS: "Scissors"
});
const roundOutcomes = Object.freeze({
  DRAW: 1,
  PLAYER_WIN: 2,
  COMPUTER_WIN: 3
});

const buttons = document.querySelectorAll(".btn-container > button");
buttons.forEach((button) => {
  button.addEventListener("click", function(e) {
    playRound(e.target.dataset.key);
  });
});

playAgainButton.addEventListener("click", reset);

function getPlayerScore() {
  return `Player score: ${playerScore}`;
}

function getComputerScore() {
  return `Computer score: ${computerScore}`;
}

function getCurrentRound() {
  return `Round: ${currentRound}`;
}

function playRound(playerSelection) {
  if (gameOver) return;
  computerSelection = computerPlay();
  let roundWinner = getRoundWinner(playerSelection, computerSelection);
  updateScore(roundWinner);
  displayRoundOutcome(roundWinner, playerSelection, computerSelection);
  checkForGameWinner();
}

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return choices.ROCK;
  } else if (randomNum === 1) {
    return choices.PAPER;
  } else if (randomNum === 2) {
    return choices.SCISSORS;
  }
}

function getRoundWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return roundOutcomes.DRAW;
  } else if (
    (playerSelection === choices.ROCK && computerSelection === choices.PAPER) ||
    (playerSelection === choices.PAPER && computerSelection === choices.SCISSORS) ||
    (playerSelection === choices.SCISSORS && computerSelection === choices.PAPER)
  ) {
    return roundOutcomes.COMPUTER_WIN;
  } else {
    return roundOutcomes.PLAYER_WIN;
  }
}

function updateScore(winner) {
  if (winner === roundOutcomes.PLAYER_WIN) {
    playerScore++;
    currentRound++;
    playerScoreOutput.textContent = getPlayerScore();
    roundOutput.textContent = getCurrentRound();
  } else if (winner === roundOutcomes.COMPUTER_WIN) {
    computerScore++;
    currentRound++;
    computerScoreOutput.textContent = getComputerScore();
    roundOutput.textContent = getCurrentRound();
  }
}

function displayRoundOutcome(winner, playerSelection, computerSelection) {
    if (winner === roundOutcomes.DRAW){
        roundOutcome.textContent = `Draw! ${playerSelection} ties ${computerSelection}`;
    } else if (winner === roundOutcomes.PLAYER_WIN){
        roundOutcome.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        roundOutcome.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

function checkForGameWinner() {
  if (playerScore === 3) {
    gameOver = true;
    displayWinner("player");
    togglePlayAgain();
  } else if (computerScore === 3) {
    gameOver = true;
    displayWinner("computer");
    togglePlayAgain();
  }
}

function displayWinner(winner) {
  if (winner === "player"){
    gameOutcome.textContent = "You win! Congrats!";
  } else {
    gameOutcome.textContent = "You lose! Better luck next time.";
  }
   
}

function togglePlayAgain() {
    playAgainButton.classList.toggle("play-again-visible");
}

function reset() {
  togglePlayAgain();
  gameOver = false;
  playerScore = 0;
  computerScore = 0;
  currentRound = 0;
  playerScoreOutput.textContent = getPlayerScore();
  computerScoreOutput.textContent = getComputerScore();
  roundOutput.textContent = getCurrentRound();
  roundOutcome.textContent = "";
  gameOutcome.textContent = "";
}
