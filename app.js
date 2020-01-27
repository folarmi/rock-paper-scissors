// Global Variables
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = Number(prompt("How many rounds do you want to play?"));
let gameRound = 0;


//Selectors
const buttons = document.querySelectorAll("button");
const computer = document.getElementById("computerChoice");
const roundWinner = document.getElementById("eachRound");

//Event Listeners

buttons.forEach(button => {
  button.addEventListener("click", singleRound);
});


//Functions

function singleRound(event) {
  let playerSelection = event.target.id;
  playerSelection = playerSelection.toLowerCase();
  const computerSelection = computerPlay();
  var result = compareGuesses(playerSelection, computerSelection);
  updateScore(result,2);
  computer.textContent = "The computer throws " + computerSelection;
  roundWinner.textContent = " Your score is " + playerScore + " and the computer score is " + computerScore;
  console.log(gameRound++);

  if (gameRound === numberOfRounds) {
    buttons.forEach(button => {
      button.removeEventListener("click", singleRound);
    });
    roundWinner.textContent = "This round is over!!!"
  }
}

// if(playerScore > computerScore){
//   roundWinner.textContent = "Hurray!!!,You won"
// } else {
//   roundWinner.textContent = "The computer Won...Better luck next time!!!"
// }


function computerPlay() {
  let computerSelection = Math.floor(Math.random() * 3) + 1;
  switch (computerSelection) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      console.log("error");
  }
}


function compareGuesses(playerSelection, computerSelection) {
  //First check for equality
  if(playerSelection === computerSelection) {
    return 0;
  }
  //No check for playerSelection winning
  if(
    (playerSelection === "rock" && computerSelection === "scissors") 
                       ||
    (playerSelection === "paper" && computerSelection === "rock")
                       ||
    (playerSelection === "scissors" && computerSelection === "paper"))
    {
    return 1;
    }
   return 2;
}


function updateScore(result, points) {
  if(result === 1) {
    playerScore += points;
  }
  if(result === 2) {
    computerScore += points;
  }
  if(result === 0) {
    computerScore += 0;
    playerScore += 0;
  }
}


singleRound;




