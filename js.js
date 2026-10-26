 function getComputerChoice (){
    const number = Math.floor(Math.random()*3);
    switch(number){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.log("error");
    }
}
function getPlayerChoice (){
    let userChoice = prompt("rock paper scissors");
    userChoice = userChoice.toLowerCase();
    switch(userChoice){
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
            return getComputerChoice();
    }    
}
let playerScore = 0;
let computerScore = 0;


function playRound(playerChoice,computerChoice){
    console.log(`playerChoice ${playerChoice} and computerchoice ${computerChoice} `)
    if (playerChoice == computerChoice) {
        console.log(`DRAW!`);
    } else if (playerChoice == "rock" && computerChoice == "paper" 
        || playerChoice == "paper" && computerChoice == "scissors"
        ||playerChoice == "scissors" && computerChoice == "rock") 
    {
        console.log(`player's ${playerChoice} lose to computer Choice ${computerChoice}`)
        computerScore++;
    }else
    {
        console.log(`player's ${playerChoice} Win to computer Choice ${computerChoice}`)
        playerScore++;
    }
}

function gamePlay (){
const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice ();
playRound(playerChoice,computerChoice); 
console.log(`player score ${playerScore} || computer score ${computerScore}`)
}

 function playGame (){
    gamePlay();
    gamePlay();
    gamePlay();
    gamePlay();
    gamePlay();
 }