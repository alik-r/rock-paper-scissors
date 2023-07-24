"use strict";

let playerScore = 0;
let computerScore = 0;

const divScore = document.querySelector('.score');
const divRoundResult = document.querySelector('.round-result');
const divWinner = document.querySelector('.winner');

const btnRock = document.querySelector('.btn.rock');
const btnPaper = document.querySelector('.btn.paper');
const btnScissors = document.querySelector('.btn.scissors');
const btnReset = document.querySelector('.btn.reset');

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

function getRoundResult(outcome, playerSelection, computerSelection) {
    if (outcome === 'Tie') {
        return "It's a Tie!"
    } else if (outcome === 'Player') {
        return `Player wins: ${playerSelection} beats ${computerSelection}`;
    } else if (outcome === 'Computer') {
        return `Computer wins: ${computerSelection} beats ${playerSelection}`;
    } else {
        return "Input error: Please enter a correct option";
    }
}

function reset() {
    btnRock.style.border = '';
    btnPaper.style.border = '';
    btnScissors.style.border = '';

    playerScore = computerScore = 0;
    divScore.textContent = "0 : 0";
    divRoundResult.textContent = '';
    divWinner.textContent = '';

    btnReset.style.display = 'none';
}

function isFinished() {
    return playerScore === 5 || computerScore === 5;
}

function updateScores(outcome) {
    if (outcome === 'Player') playerScore++;
    if (outcome === 'Computer') computerScore++;
}

function updateDisplay(outcome, playerSelection, computerSelection) {
    divRoundResult.textContent = getRoundResult(outcome,
        playerSelection,
        computerSelection);
    divScore.textContent = `${playerScore} : ${computerScore}`;
}

function displayWinner() {
    const winner = (playerScore === 5) ? 'Player' : 'Computer';
    divWinner.textContent = `${winner} won the game!`;
    btnReset.style.display = 'block';
    btnReset.textContent = 'Reset?';
}

btnRock.addEventListener('click', () => {
    if (isFinished()) return;

    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const outcome = playOneRound(playerSelection, computerSelection);

    updateScores(outcome);
    updateDisplay(outcome, playerSelection, computerSelection);
    colorChoice(outcome, playerSelection, computerSelection);

    if (isFinished()) {
        displayWinner();
    }
});

btnPaper.addEventListener('click', () => {
    if (isFinished()) return;

    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const outcome = playOneRound(playerSelection, computerSelection);

    updateScores(outcome);
    updateDisplay(outcome, playerSelection, computerSelection);
    colorChoice(outcome, playerSelection, computerSelection);

    if (isFinished()) {
        displayWinner();
        btnReset.textContent = 'Reset?';
    }
});

btnScissors.addEventListener('click', () => {
    if (isFinished()) return;

    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const outcome = playOneRound(playerSelection, computerSelection);

    updateScores(outcome);
    updateDisplay(outcome, playerSelection, computerSelection);
    colorChoice(outcome, playerSelection, computerSelection);

    if (isFinished()) {
        displayWinner();
        btnReset.textContent = 'Reset?';
    }
});

btnReset.addEventListener('click', reset);

function colorChoice(outcome, playerSelection, computerSelection) {
    btnRock.style.border = '';
    btnPaper.style.border = '';
    btnScissors.style.border = '';

    if (outcome === 'Player') {
        document.querySelector(`.${playerSelection}`).style.border = '4px solid green';
        document.querySelector(`.${computerSelection}`).style.border = '4px solid red';
    } else if (outcome === 'Computer') {
        document.querySelector(`.${playerSelection}`).style.border = '4px solid red';
        document.querySelector(`.${computerSelection}`).style.border = '4px solid green';
    } else {
        document.querySelector(`.${playerSelection}`).style.border = '4px solid blue';
    }
}