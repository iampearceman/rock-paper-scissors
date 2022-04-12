const playOption = ["rock", "paper", "scissors"];



function computerPlay() {
    let randomChoice = Math.floor(Math.random() * playOption.length);
    return playOption[randomChoice];
}

function userPlay(){
    let input = prompt("Please enter your choice: rock, paper, scissors").toLowerCase();
    if (playOption.includes(input)) {
        return input;
    } else {
        alert("Please enter a valid option");
        return false;
    }
}


function checkWinner() {
    let computerSelection = computerPlay();
    console.log(`comp ${computerSelection}`);
    let playerSelection = userPlay();
    console.log(`user ${playerSelection}`);
    if (computerSelection === playerSelection) {
        return `it's a tie`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `User won!`;
    } else {
        return `Computer won`;
    }
}
