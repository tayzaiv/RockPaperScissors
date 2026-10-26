function getComputerChoice(){
    const number = Math.floor(Math.random() * 3);
    switch(number){
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'rock';
    }
}

function getHumanChoice(){
    return prompt("Enter your choice: ");
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice){
    const humanChoiceStr = humanChoice.toLowerCase();
    if(humanChoiceStr === 'rock' && computerChoice === 'paper' || humanChoiceStr === 'paper' && computerChoice === 'scissors' || humanChoiceStr === 'scissors' && computerChoice === 'rock'){
        console.log(`DEFEAT: The computer's ${computerChoice} beats your ${humanChoiceStr}!`);
        computerScore++;
    } else if(humanChoiceStr === computerChoice) {
        console.log(`DRAW: it's a tie! (${humanChoiceStr})`);
    } else {
        console.log(`VICTORY: Your ${humanChoiceStr} beats the computer's ${computerChoice}!`);
        humanScore++;
    }
}
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);