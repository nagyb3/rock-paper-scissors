function getComputerChoice() {
    let randomnum = Math.floor(Math.random() * 3);
    switch (randomnum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return ["You win! Rock beats Scissors", 0];
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ["You lose! Scissors beats Paper", 1];
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ["You lose! Rock beats Scissors", 1]
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ["You win! Paper beats Rock", 0]
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ["You Win! Scissors beats paper", 0]
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ["You lose! Paper beats rock", 1]
    } else if (playerSelection === computerSelection.toLowerCase()) {
        return ["It's a tie!", 2]
    }
}

// return value of playRound function:
// list where the first element is the string output and the second one is a number
// that number refers to whether the player won lost or its a tie
// 0: player won, 1: the player lost, 2: its a tie


/*
const playerSelection = "rock";
const computerSelection = getComputerChoice()

console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
 */

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("what is your choice?");
        let currentRoundList = playRound(playerSelection, getComputerChoice());
        console.log(currentRoundList[0]);
        if (currentRoundList[1] === 0) {
            playerScore += 1;
        } else if (currentRoundList[1] === 1) {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore) {
        console.log("Congrats! You have won the game!");
    } else if(playerScore < computerScore) {
        console.log("The computer has won the game!");
    } else {
        console.log("The game has ended in a tie!");
    }
}

game();