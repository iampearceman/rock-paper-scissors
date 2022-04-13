const playOption = ["rock", "paper", "scissors"];
let computerLivesCounter = 5;
let userLivesCounter = 5;

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * playOption.length);
    return playOption[randomChoice];
}

function userPlay() {
    let input = prompt("Please enter your choice: rock, paper, scissors").toLowerCase();
    if (playOption.includes(input)) {
        return input;
    } else {
        return false;
    }
}


function playRound() {
    let computerSelection = computerPlay();
    console.log(`comp ${computerSelection}`);
    let playerSelection = userPlay();
    if (!playerSelection) {
        return playRound();
    }
    console.log(`user ${playerSelection}`);
    if (computerSelection === playerSelection) {
        return `Tie`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `User`;
    } else {
        return `Computer`;
    }
}



function game() {
    while (computerLivesCounter > 0 && userLivesCounter > 0) {
        let winner = playRound();
        if (winner === `User`) {
            computerLivesCounter--;
        } else if (winner === `Computer`) {
            userLivesCounter--;
        } else {
            playRound();
        } 
        console.log(`user lives = ${userLivesCounter}`, `computer lives = ${computerLivesCounter}`);
    } 

    if (computerLivesCounter > userLivesCounter) {
        return `Computer Won!`;
    }else {
        return `User won!`;
    }    
}


