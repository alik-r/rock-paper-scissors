"use strict";

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
}