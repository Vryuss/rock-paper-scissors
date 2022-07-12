function computerPlay(){
    let choice = Math.floor(Math.random() * 3)
    let tool = " "
    if(choice == 0){
        tool = "rock"
    }
    if(choice == 1){
        tool = "paper"
    }
    if(choice == 2){
        tool = "scissors"
    }
    return tool
    
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()
    
    if(player == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats Paper"
    }
    if(player == "paper" && computerSelection == "rock"){
        return "You win! Paper beats Rock"
    }
    if(player == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats Scissors"
    }
    else{
        return "You lost. " + computerSelection + " beats " + playerSelection;
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
