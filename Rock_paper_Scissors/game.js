const readline = require('readline-sync');

var player_score = 0
var computer_score = 0
b = false


var playerSelection

function playRound(playerSelection, computerSelection ) {

 if(playerSelection == computerSelection)
 {
    score = 0
    com_score = 0
 }
 else if(playerSelection == 'rock')
 {
     if(computerSelection == 'scissor')
     {
        score = 1
        com_score = 0
     }
     else if(computerSelection == 'paper')
     {
        score = 0
        com_score = 1
    }
 }
 else if(playerSelection == 'scissor')
 {
     if(computerSelection == 'paper')
     {
        score = 1
        com_score = 0
    }
     else if(computerSelection == 'rock')
     {
        score = 0
        com_score = 1
     }
 }
 else if(playerSelection == 'paper')
 {
     if(computerSelection == 'rock')
     {
        score = 1
        com_score = 0
     }
     else if(computerSelection == 'scissor')
     {
        score = 0
        com_score = 1
     }
 }


  return [score , com_score] 

}


function computerPlay()
{
    var arr = ["rock", "scissor",  "paper"]; 
    computer_choise = arr[Math.floor(Math.random() * arr.length)];

    return computer_choise
}


do{
    const computerSelection = computerPlay();

    playerSelection = readline.question("Enter your weapon : ");

    console.log(playerSelection +" "+ computerSelection)
    let scores = playRound(playerSelection, computerSelection );

    computer_score = computer_score + scores[0]
    player_score = player_score + scores[1]

    console.log(computer_score)
    console.log(player_score)

    if(computer_score == 5 || player_score == 5)
        b = true
      

}while(b == false)

if(player_score == 5)
console.log("YOU DEFEAT THE COMPUTER")
else
console.log("COMPUTER DEFEATS YOU")


