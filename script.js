const options = ["rock", "paper", "scissors"]

function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
getComputerChoice ();

function checkWinner (playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "tie";
    } 
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound (playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result === "tie") {
        return "Tie";
    } else if(result === "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose.. ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

function getPlayerChoice (){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    console.log("welcome");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound( playerSelection, computerSelection));
        
    }
}

game()