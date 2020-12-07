let playerScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

function game(){
    while (playerScore < 3 && computerScore < 3){
        let playerSelection = getPlayerSelection();
        let roundOutput = playRound(playerSelection, computerPlay());
        updateScore(roundOutput);
        outputResultAndScore(roundOutput);
    }
    outputWinner(playerScore);
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

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Draw!"
    } else if ((playerSelection === choices[0] && computerSelection === choices[1]) ||
    (playerSelection === choices[1] && computerSelection === choices[2]) ||
    (playerSelection === choices[2] && computerSelection === choices[1])){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

function getPlayerSelection() {
    let selection = prompt("Rock, paper, or scissors? ");
    selection = toTitleCase(selection);
    return selection;
}

function updateScore(roundOutput){
    if (roundOutput.includes("You win!")) {
        playerScore++;
    } else if (roundOutput.includes("You lose!")){
        computerScore++;
    }
}

function outputResultAndScore(roundOutput) {
    console.log(roundOutput);
    console.log(`Player score: ${playerScore} \nComputer Score: ${computerScore}`);
}

function outputWinner(playerScore){
    if (playerScore === 3){
        console.log("You win! Want to play again?");
    } else {
        console.log("Computer wins! Better luck next time.");
    }
}

function toTitleCase(word){
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}