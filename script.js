"use strict";

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } 

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "You lose! Paper beats Rock";
        } else if (computerSelection === 'scissors') {
            return "You won! Rock beats Scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "You won! Paper beats Rock";
        } else if (computerSelection === 'scissors') {
            return "You lose! Scissors beats Paper";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection === 'paper') {
            return "You won! Scissors beats Paper";
        }
    }
}