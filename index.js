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

function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `It is a Draw, you choose ${playerSelection}`;
  }
}

const playerSelection = prompt(
  "Please Enter Rock, Paper or Scissors:"
).toLowerCase();
const computerSelection = getComputerChoice();

function game() {
  for (let i = 0; i < 5; i++) {
    // your code here!
    return playRound(playerSelection, computerSelection);
  }
}

console.log(game());
