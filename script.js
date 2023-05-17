
/// Natalia code------------------------------------------------------------------
let choice = ["R", "P", "S"];

let userWin = 0;
let ties = 0;
let userLoses =0;



var startGame = function(){
    let userChoice = window.prompt("type in you choice R,P or S");

    if (!userChoice) {
        return;
      }
      userChoice = userChoice.toUpperCase();

    var computerIndex = Math.floor(Math.random()*choice.length); ///gives index that computer picks
    var computerChoice = choice[computerIndex]; // gives letter from the array using index from line 19



    window.alert("The computer chose " + computerChoice);

    if (userChoice === computerChoice ){
        window.alert("it is a tie")
        ties++;
    }
    else if ((userChoice === "R" && computerChoice === "S") ||
      (userChoice === "P" && computerChoice === "R") ||
      (userChoice === "S" && computerChoice === "P")
    ){
        window.alert ("you win!")
        userWin++;
      }
      else {
        window.alert("you lost")
        userLoses++;

      }
  
      var playAgain = window.confirm("want to play again?")

      if (playAgain){
        startGame();}
}

window.alert("You wins" + "=" + userWin + "Your Losses" + "="+ userLoses + "Ties" + ties)

startGame();


