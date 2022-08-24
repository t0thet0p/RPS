/* function getComputerChoice() {
var choices = Array("Rock", "Paper", "Scissors");
var choice = choices[Math.floor(Math.random()*choices.length)];

return(choices);

} */


/* the function below outputs either Rock, Paper, or Scissors */
function clickMeButton() {
function getComputerChoice(choices) {
    
    return choices[Math.floor(Math.random()*choices.length)];
    
}
var choices = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(choices));

}


/* the function below takes two parameters "playerSelection" and
"computerSelection" and returns a string that declares the winner of
a round like so: "You Lose! Paper beats Rock" */

function game(){
for (var i = 1; i < 5; ++i) playRound(i);
function playRound(playerSelection, computerSelection) {

var playerSelection = 
playerSelection[Math.floor(Math.random()*playerSelection.length)];

var computerSelection = 
computerSelection[Math.floor(Math.random()*computerSelection.length)];

}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

}

