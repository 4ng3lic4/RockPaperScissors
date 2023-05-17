/** ANGELICA'S CODE 
 * 
 */



//Initialization of variables

var wins = 0;
var ties = 0;
var loses = 0;

//As a user, I expect the computer to choose R, P, or S in return. Such choices will be displayed as strings.
var options = ["R", "P", "S"]

//Function Expression to prompt user using Window object.
var playGame = function (){
  //Ask user for their choice
  var userChoice = window.prompt("Enter R, P or S:")

  //If use cancels, stop the function
  if(!userChoice){
    return
  }

   // Convert to uppercase to make comparisons easier
userChoice = userChoice.toLocaleUpperCase();

//Get random index from array of options using Math.floor and Math.random
//We create variable to store the index, round down to the nearest integer, pick a random number and multiply it by the length of the array of choices 
var index = Math.floor(Math.random() * options.length)

//store the computer's choice (it will give the letter of the choice)
var computerChoice = options[index];

//Alert user of computer's choice
window.alert("The computer chose " + computerChoice);

//Prepare conditionals comparing the choices 

//If choices are the same, its a tie
if (computerChoice === userChoice){
  window.alert("It's a tie")
  // the function increments the ties variable to keep track of the number of tie games the user has had
  ties++;

  //Send an alert to the user about the result
  window.alert("It's a tie!")

  //Check every win condition for the player using logical operators and boolean

} else if (
  (userChoice === "R" && computerChoice === "S") || //OR
  (userChoice === "P" && computerChoice === "R") ||
  (userChoice === "S" && computerChoice === "R")
) {

  window.alert("Congratulations, you won!")
  //add number or wins to the variable
  wins++;

  //if the above conditions fail count the looses and send alert
} else {
  losses++;
  window.alert("Boohoo you lost!");
}


// Print stats with line breaks using : \n
window.alert(
  " Stats:\nWins: " + wins + "\nLoses: " + loses +  "n\Ties: " + ties);

  //Ask user to play again
  var playAgain = window.confirm("Do you want to play again?");

  //If user pressed OK, run conditional aas true and call the function playgame()
  if(playAgain)
  playGame();

  //Missing curly bracket
};


//Run the game for the first time
playGame();