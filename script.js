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
    
    if(player == computerSelection){
        tie++
        return "Its a tie!"
    }
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

let tie = 0;
let win = 0;
let loss = 0;

const btn = document.querySelectorAll('button');
const output = document.querySelector(".output")

btn.forEach((button) => {
    button.addEventListener('click', () => {
        const br = document.createElement("br");
        const text = document.createTextNode(playRound(button.id, computerPlay()))
        output.appendChild(br);
        output.appendChild(text);
        
});
})