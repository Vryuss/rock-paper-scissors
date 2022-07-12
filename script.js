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
        win++
        return "You win! Scissors beats Paper"
        
    }
    if(player == "paper" && computerSelection == "rock"){
        win++
        return "You win! Paper beats Rock"
        
    }
    if(player == "rock" && computerSelection == "scissors"){
        win++;
        return "You win! Rock beats Scissors"
        
    }
    else{
        loss++;
        return "You lost. " + computerSelection + " beats " + playerSelection;
        
    }

}

let win = 0;
let loss = 0;

function game(){
    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, or Scissors?");

        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("You won " + win + " times and lost " + loss + " times.");
}

game();