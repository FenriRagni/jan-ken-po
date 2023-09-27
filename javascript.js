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

function randomNumer (size) {
    var random =Math.floor(Math.random * size);
    return random;
}

