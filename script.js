//generate computer's chosen draw
function getComputerChoice(){
    let computerChoice = null;
    let randomPick = Math.floor(Math.random() * 3) + 1;
    if (randomPick === 1){
        computerChoice = 'rock';
    } else if (randomPick === 2){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

//getPlayerChoice function
function getPlayerChoice(promptedChoice){
    let playerChoice = promptedChoice.toLowerCase();
    switch(playerChoice){
        case 'rock':
        case 'paper':
        case 'scissors':
            return playerChoice;
            break;
        default:
            return "an invalid choice";
    }
}

//playRound function
function playRound(){
    
}

let promptInput = prompt("rock paper scissors shoot\nyour choice?: ");
getPlayerChoice(promptInput);
console.log("Player picked " + getPlayerChoice(promptInput));
console.log("Computer picked " + getComputerChoice());