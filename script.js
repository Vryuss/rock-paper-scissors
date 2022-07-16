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

const pScore = document.querySelector(".p1")
const cpuScore = document.querySelector(".p2")

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()
    
    if(player == computerSelection){
        tie++
        return "Its a tie!"
    }
    if(player == "scissors" && computerSelection == "paper"){
        win++
        pScore.innerHTML = "You: " + win
        return "You win the round! Scissors beats Paper"
        
    }
    if(player == "paper" && computerSelection == "rock"){
        win++
        pScore.innerHTML = "You: " + win
        return "You win the round! Paper beats Rock"
        
    }
    if(player == "rock" && computerSelection == "scissors"){
        win++;
        pScore.innerHTML = "You: " + win
        return "You win the round! Rock beats Scissors"
        
    }
    else{
        loss++;
        cpuScore.innerHTML = "CPU: " + loss
        return "You lost the round. " + computerSelection + " beats " + playerSelection;
        
    }

}

let tie = 0;
let win = 0;
let loss = 0;


const btn = document.querySelectorAll('button');
const output = document.querySelector(".output")
const score = document.querySelector(".result")

btn.forEach((button) => {
    button.addEventListener('click', () => {
        const br = document.createElement("br");
        const text = document.createTextNode(playRound(button.id, computerPlay()))
        output.appendChild(text);

        if(win == 5 || loss == 5){
            const sum = tie+win+loss
            if(win == 5){score.innerHTML = "You win the Game after " + sum + " rounds!"}
            else{score.innerHTML = "You lost the Game after " + sum + " rounds!"}
            btn.forEach((button) =>{
                button.remove()
            })
        }
        output.appendChild(br);
        
});
})