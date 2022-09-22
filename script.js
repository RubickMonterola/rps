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
    console.log("Computer picks " + computerChoice);
    return computerChoice;
}

//getPlayerChoice function
function getPlayerChoice(){
    let promptInput = prompt("rock paper scissors shoot\nyour choice?: ");
    let playerChoice = promptInput.toLowerCase();
    switch(playerChoice){
        case 'rock':
        case 'paper':
        case 'scissors':
            console.log("Player picks " + playerChoice);
            return playerChoice;
            break;
        default:
            playerChoice = "an invalid choice";
            console.log("Player picks " + playerChoice);
            return playerChoice
    }
}

//playRound function
function playRound(playerSelection, computerSelection){
    let x = playerSelection;
    let y = computerSelection;
    switch(true){
        case (playerSelection===computerSelection):
            return "Draw";
            break;
        case (x==='rock' && y==='scissors'):
        case (x==='paper' && y==='rock'):
        case (x==='scissors' && y==='paper'):
            return "Player wins round";
            break;
        case (y==='rock' && x==='scissors'):
        case (y==='paper' && x==='rock'):
        case (y==='scissors' && x==='paper'):
            return "Computer wins round";
            break;
        default:
            return "Player picks an invalid choice. Computer wins round";
    }
}

let a = getPlayerChoice();
let b = getComputerChoice();
c = playRound(a, b);
console.log(c);