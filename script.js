function getComputerChoice(){
    let computerChoice = null;
    let randomPick = Math.floor(Math.random() * 3) + 1;
    if (randomPick === 1){
        computerChoice = 'Rock';
    } else if (randomPick === 2){
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

getComputerChoice()