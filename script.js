 let choices = ["scissors","rock","paper"];

//randomly generates computer's choices
function getComputerChoice(ch){
    return ch[Math.floor(Math.random()*ch.length)];
}

//This function accepts user input
function getPlayerSelection(){
    let input = prompt("Enter your selection").toLowerCase();
    return input;
}

//This function plays a single round of RPS
function playRound(playerSelection,computerSelection){
    if (playerSelection=="rock"&&computerSelection=="paper") {
        return 0;
    }else if (playerSelection=="rock"&&computerSelection=="scissors"){
        return 1;
    } else if (playerSelection=="rock"&&computerSelection=="rock"){
        return 2;
    } else if (playerSelection=="paper"&&computerSelection=="rock"){
        return 1;
    } else if (playerSelection=="paper"&&computerSelection=="scissors"){
        return 0;
    } else if (playerSelection=="paper"&&computerSelection=="paper"){
        return 2;
    } else if (playerSelection=="scissors"&&computerSelection=="scissors"){
        return 2;
    } else if (playerSelection=="scissors"&&computerSelection=="rock"){
        return 0;
    } else if (playerSelection=="scissors"&&computerSelection=="paper"){
        return 1;
    }
}

//The main game loop
function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i=1;i<=5;i++){
        let input = getPlayerSelection();
        let cpu = getComputerChoice(choices);
        if (playRound(input, cpu)==0) {
            computerScore++;
            console.log("You lose");
        } else if(playRound(input, cpu)==1){
            playerScore++;
            console.log("You win");
        } else if (playRound(input, cpu)==2){
            console.log("Its a tie");
        }
      }
      
      if(playerScore>computerScore){
          console.log("Human beats computer");
      } else if(playerScore<computerScore){
          console.log("The computers are sentient");
      } else if(playerScore==computerScore){
          console.log("Its a tie");
      }
}

game();