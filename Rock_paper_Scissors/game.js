
var final_score = 0

function playRound(playerSelection, computerSelection ) {

  if(playerSelection == 'rock' && computerSelection == 'rock')
  score = 0
  else if(playerSelection == 'scissor' && computerSelection == 'rock')
  score = 0
  else if(playerSelection == 'rock' && computerSelection == 'paper')
  score = 0
  else if(playerSelection == 'scissor' && computerSelection == 'scissor')
  score = 0
  else if(playerSelection == 'scissor' && computerSelection == 'rock')
  score = 0
  else if(playerSelection == 'paper' && computerSelection == 'scissor')
  score = 0
  else
  score = 1

  return score 

}


function computerPlay()
{
    var arr = ["rock", "scissor",  "paper"]; 
    computer_choise = arr[Math.floor(Math.random() * arr.length)];

    return computer_choise
}


const computerSelection = computerPlay();


const input1 = require('readline');
var prompts = input1.createInterface(process.stdin,process.stdout);

do{

prompts.question("Enter your weapon : " , function(playerSelection) 
{

    score = playRound(playerSelection, computerSelection );
    final_score = final_score + score

});


console.log(final_score)


}while((final_score <= 5))

