// Create array of possible options for game
const options = ["rock", "scissor", "paper"];

// Function getComputerChoice () from array pick random option
function getComputerChoice() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log("Computer's choice is ", computerSelection); // Test out if works
    return computerSelection; // Return the computer's choice
}
getComputerChoice();

// Function checkWinner for player, computer for tie, if player wins
// else computer wins
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

// function playRound if return tie result is tie, if return is 
// player wins result is player wins
// else result is computer wins
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "tie") {
        return "Tie";
    } else if (result === "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "Computer") {
        return `You lose.. ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice(); // Call the function and get the computer's choice
console.log(playRound(playerSelection, computerSelection));
