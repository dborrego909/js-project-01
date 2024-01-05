
// Ask user for input from three choices
// computer randomizes choice between 3 choices
// if user picks  same as computer no one wins
// if user picks rock and computer picks scissors, win else lose
// if user picks paper and computer picks rock, win else lose
// if user picks scissors and computer picks paper, win, else lose

console.log("Hello, world");

const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
    console.log(choice);
}

function checkWinner (playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }   else if(
            (playerSelection == "rock" && computerSelection == "scissors" ) ||
            (playerSelection == "paper" && computerSelection == "rock" ) ||
            (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound (playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "You tied"
    } else if (result == "Player"){
        return `You Win! ${playerSelection} beat ${computerSelection}`
    } else {
            return `You Lose ${playerSelection} beats ${computerSelection}`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));