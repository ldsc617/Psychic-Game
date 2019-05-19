//variables
var  letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var SoFarGuessed = []



var userGuess = document.onkeyup;
var compGuess = letters[Math.floor(Math.random() * letters.length)];


randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);

function computerGuess() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
	console.log(randomLetter);
}



document.onkeyup = function (event) {
  
  userGuess = event.key;
  SoFarGuessed.push(userGuess);

  if (compGuess == userGuess) {
    wins++;
    guessesLeft = 10;
    SoFarGuessed = [];
  }
  
  if (compGuess != userGuess) {
    guessesLeft--;
    
  }

  if (guessesLeft == 0) {
    losses++;
    guessesLeft = 10;
    SoFarGuessed = [];
  }

 
document.getElementById("game").innerHTML = html;
}