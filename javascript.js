//we want to play RPS against a computer oppenent
//we want to ask user if they want to play Rock, Paper, or Scissors
//we want to confirm their decision
//we want to randomly choose between Rock, Paper, or Scissors for the opponent
//we want to then tally whether we won, lost, or tied

//a win happens when player chooses rock and opponent chose scissors or
//choosing paper opponent chooses rock or
//choosing scissors opponent chooses paper

//a loss happens when the player chooses rock and opponent chose paper or
//choosing paper opponent choose scissors or
//choosing scissors opponent chooses rock

//a tie happens when player and opponent choose the same thing

//if win or lose ask if they want to play again
//if tie keep playing

var opponentPoss = ["rock", "paper", "scissors"];
var playerChoice = "";
var wins, losses, ties = 0;
function randomNumber (size) {
    return Math.floor(Math.random() * size);
}

console.log(randomNumber(3));

function playGame() {
    playerChoice = prompt("Choose rock, paper, or scissors\nr for rock, p for paper, s for scissors");
    if(playerChoice === "r"){
        alert("You chose Rock!");
        playerChoice = "rock";
    }
    else if(playerChoice === "p"){
        alert("You chose paper!");
        playerChoice = "paper";
    }
    else if(playerChoice === "s"){
        alert("You chose scissors!");
        playerChoice = "scissors";
    }
    else{
        alert("You have not chosen a valid input, pls try again");
        playGame();
        return;
    }
    var oppenentChoice = opponentPoss[randomNumber(opponentPoss.length)];

    alert("Your opponent chose: " + oppenentChoice);

    if(oppenentChoice === playerChoice) {
        alert("You tied!")
        playGame();
        return;
    }
    else if(((playerChoice === "rock") && (oppenentChoice === "scissors")) || 
    ((playerChoice === "paper") && (oppenentChoice === "rock")) || 
    ((playerChoice === "scissors") && (oppenentChoice === "paper"))) {
        alert("You won!");
    }
    else if(((playerChoice === "rock") && (oppenentChoice === "paper")) || 
    ((playerChoice === "paper") && (oppenentChoice === "scissors")) || 
    ((playerChoice === "scissors") && (oppenentChoice === "rock"))) {
        alert("You lose!");
    }
 }
playGame();