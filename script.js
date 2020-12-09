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

const choices = ["rock", "paper", "scissors"];
const outcomes = ["draw", "player", "computer"]

const buttons = document.querySelectorAll(".btn-container > button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    playRound(e.target.className);
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
  let winner = getWinner(playerSelection, computerSelection);
  updateScore(winner);
  displayOutcome(winner, playerSelection, computerSelection);
  checkForWinner();
}

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return choices[0];
  } else if (randomNum === 1) {
    return choices[1];
  } else if (randomNum === 2) {
    return choices[2];
  }
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return outcomes[0];
  } else if (
    (playerSelection === choices[0] && computerSelection === choices[1]) ||
    (playerSelection === choices[1] && computerSelection === choices[2]) ||
    (playerSelection === choices[2] && computerSelection === choices[1])
  ) {
    return outcomes[2];
  } else {
    return outcomes[1];
  }
}

function updateScore(winner) {
  if (winner === outcomes[1]) {
    playerScore++;
    currentRound++;
    playerScoreOutput.textContent = getPlayerScore();
  } else if (winner === outcomes[2]) {
    computerScore++;
    currentRound++;
    computerScoreOutput.textContent = getComputerScore();
  }
}

function displayOutcome(winner, playerSelection, computerSelection) {
    if (winner === outcomes[0]){
        roundOutcome.textContent = `Draw! ${playerSelection} ties ${computerSelection}`;
    } else if (winner === outcomes[1]){
        roundOutcome.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        roundOutcome.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

function checkForWinner() {
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
