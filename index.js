let rock = 1;
let paper = 2;
let scissors = 3;

function getComputerChoice() {
  let compGuess = Math.floor(Math.random() * 3 + 1);
  if (compGuess == 1) {
    return "rock";
  } else if (compGuess == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == "rock" && playerSelection == "paper") {
    return "player wins";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "computer wins";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return "computer wins";
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    return "player wins";
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    return "player wins";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "computer wins";
  } else {
    return "it is a draw";
  }
}
let computerSelection = getComputerChoice();
let playerInput = prompt("Please Enter Rock, Paper or Scissors:");
let playerSelection = playerInput.toLowerCase();
console.log(playRound(playerSelection, computerSelection));
