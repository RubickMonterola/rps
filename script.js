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
    let z = '';
    switch(true){
        case (playerSelection===computerSelection):
            z = "Draw";
            console.log(z);
            return z;
            break;
        case (x==='rock' && y==='scissors'):
        case (x==='paper' && y==='rock'):
        case (x==='scissors' && y==='paper'):
            z = "Player wins round";
            console.log(z);
            return z;
            break;
        case (y==='rock' && x==='scissors'):
        case (y==='paper' && x==='rock'):
        case (y==='scissors' && x==='paper'):
            z = "Computer wins round";
            console.log(z);
            return z;
            break;
        default:
            z = "Player picks an invalid choice. Computer wins round";
            console.log(z);
            return z;
    }
}

//best of 5 rock-paper-scissors game

function game(){
    let roundCount = 1;
    let scoreComputer = 0;
    let scorePlayer = 0;
    for(let i = 1; i <= 5; i++){
        console.log("Round " + roundCount);
        let result = playRound(getPlayerChoice(), getComputerChoice());
        if (result === "Draw"){
            scoreComputer++;
            scorePlayer++;
        } else if (result === "Player wins round"){
            scorePlayer++;
        } else if (result === "Computer wins round" || result === "Player picks an invalid choice. Computer wins round"){
            scoreComputer++;
        }
        roundCount++;
        console.log("Score:\nPlayer - " + scorePlayer + "\nComputer - " + scoreComputer);
    }
    if (scoreComputer > scorePlayer){
        console.log("WINNER: Computer!");
    } else if (scorePlayer > scoreComputer){
        console.log("WINNER: Player!");
    } else if (scoreComputer === scorePlayer){
        console.log("IT'S A TIE!")
    }
}

game();