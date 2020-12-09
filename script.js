let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

const playerScoreOutput = document.querySelector(".player-score");
const computerScoreOutput = document.querySelector(".computer-score");
const roundOutput = document.querySelector(".round");
const roundOutcome = document.querySelector(".round-outcome");

playerScoreOutput.textContent = getPlayerScore();
computerScoreOutput.textContent = getComputerScore();
roundOutput.textContent = getCurrentRound();

const choices = ["rock", "paper", "scissors"];
const outcomes = ["draw", "player", "computer"]

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    playRound(e.target.className);
  });
});

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
    playerScoreOutput.textContent = getPlayerScore();
  } else if (winner === outcomes[2]) {
    computerScore++;
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
    alert("You win! Play again?");
    reset();
  } else if (computerScore === 3) {
    alert("You lose! Try again?");
    reset();
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  playerScoreOutput.textContent = getPlayerScore();
  computerScoreOutput.textContent = getComputerScore();
}
