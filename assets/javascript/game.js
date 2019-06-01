//variables

var  letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var SoFarGuessed = [];




var reset = function () {
  wins = 0;
  losses = 0;
  guessesLeft = 9;
  SoFarGuessed = [];
}

document.onkeypress = function (event) {
  
  var userGuess = event.key;
  var compGuess = letters[Math.floor(Math.random() * letters.length)];
  SoFarGuessed.push(userGuess);
  console.log(userGuess);


  if (compGuess === userGuess) {
    wins++;
    guessesLeft = 9;
    SoFarGuessed = [];
    document.getElementById("wins").textContent = "wins:" + wins;
    reset();
  }
  
  else if (compGuess != userGuess) {
    guessesLeft--;
    document.getElementById("so-far").textContent = SoFarGuessed;
    

  }

 else if (guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    SoFarGuessed = [];
    document.getElementById("losses").textContent = "losses:" + losses;
    reset();
  }
  console.log(guessesLeft);

 
}
