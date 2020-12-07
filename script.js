let playerScore = 0;
let computerScore = 0;

const playerScoreOutput = document.querySelector(".player-score");
const computerScoreOutput = document.querySelector(".computer-score");

playerScoreOutput.textContent = getPlayerScore();
computerScoreOutput.textContent = getComputerScore();

const choices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        playRound(e.target.className)
    });
})

function getPlayerScore() {
    return `Player score: ${playerScore}`;
}

function getComputerScore() {
    return `Computer score: ${computerScore}`;
}

function playRound(playerSelection){
    computerSelection = computerPlay();
    let winner = getWinner(playerSelection, computerSelection);
    updateScore(winner);
    //displayMessage();
    checkForWinner();
}

function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0){
        return choices[0];
    } else if (randomNum === 1){
        return choices[1];
    } else if (randomNum === 2){
        return choices[2];
    }
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "draw"
    } else if ((playerSelection === choices[0] && computerSelection === choices[1]) ||
    (playerSelection === choices[1] && computerSelection === choices[2]) ||
    (playerSelection === choices[2] && computerSelection === choices[1])){
        return "computer";
    } else {
        return "player";
    }
}

function updateScore(winner){
    if (winner === "player") {
        playerScore++;
        playerScoreOutput.textContent = getPlayerScore();
    } else if (winner === "computer"){
        computerScore++;
        computerScoreOutput.textContent = getComputerScore();
    }
}

function checkForWinner() {
    if (playerScore === 3) {
        alert("You win! Play again?");
        reset();
    } else if (computerScore === 3){
        alert("You lose! Try again?");
        reset();
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    playerScoreOutput.textContent = getPlayerScore();
    computerScoreOutput.textContent = getComputerScore();
}
