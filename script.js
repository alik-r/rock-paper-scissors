"use strict";

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie";
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "Computer";
        } else if (computerSelection === 'scissors') {
            return "Player";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "Player";
        } else if (computerSelection === 'scissors') {
            return "Computer";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "Computer";
        } else if (computerSelection === 'paper') {
            return "Player";
        }
    } else {
        return "Error";
    }
}

function printRoundResult(outcome, playerSelection, computerSelection) {
    if (outcome === 'Tie') {
        console.log("It's a Tie!")
    } else if (outcome === 'Player') {
        console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
    } else if (outcome === 'Computer') {
        console.log(`Computer wins: ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log("Input error: Please enter a correct option")
    }
}

function printGameResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`Player won the game! ${playerScore} : ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`Computer won the game! ${computerScore} : ${playerScore}`);
    } else {
        console.log(`It's a Tie! ${playerScore} : ${computerScore}`);
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;

    const numOfRounds = 5;

    for (let i = 0; i < numOfRounds; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
        const computerSelection = getComputerChoice();

        const outcome = playOneRound(playerSelection, computerSelection);

        if (outcome === 'Player') playerScore++;
        if (outcome === 'Computer') computerScore++;

        printRoundResult(outcome, playerSelection, computerSelection);

        console.log(`Round ${i + 1} | Player ${playerScore} : Computer ${computerScore}`);
    }

    printGameResult(playerScore, computerScore)
}
