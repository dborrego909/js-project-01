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