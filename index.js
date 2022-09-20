let rock = 1;
let paper = 2;
let scissors = 3;

function getComputerChoice() {
  let compGuess = Math.floor(Math.random() * 3 + 1);
  if (compGuess == 1) {
    return "Rock";
  } else if (compGuess == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(computerSelection, playerSelection) {
    getComputerChoice();
    
    if 
}
