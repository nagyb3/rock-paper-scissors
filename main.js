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

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats paper"
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats rock"
    } else if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!"
    }
}

console.log(singleRound("paper", "Rock"));