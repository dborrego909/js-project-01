// Define what the options are for game
// options = rock, paper, scissors

// Function to create computers choice
// function getComputerChoice(); 
// indexArray getComputerChoice

const options = ["rock", "paper", "scissors"];

function getComputerChoice () {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice);
    return computerChoice;
}

getComputerChoice ()

function playRound (playerSelection, computerChoice) {
        console.log("Players choice is ", playerSelection);
        if (playerSelection === computerChoice) {
            return "Tie";
        } else if(
            (playerSelection === "paper" && computerChoice === "rock") ||
            (playerSelection === "rock" && computerChoice === "scissors") ||
            (playerSelection === "scissors" && computerChoice === "paper") 
        ){
            return "Player";
        } else 
        { return "Computer"
    }
}
        
    


const playerSelection = "paper";
const computerChoice = getComputerChoice ();
console.log()

playRound ()