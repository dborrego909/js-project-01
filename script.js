
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
    console.log(choice);
}

getComputerChoice();