var prompt = require("prompt-sync")();

function playNumberGuesser(min, max) {
  var goldenNumber = generateRandomNumber(min, max);
  var guessed = false;
  var guess;
  var guesses = new Set();

  while(!guessed) {
    guess = prompt("Guess a number: ")

    if (isNaN(guess)) {
      console.log("Not a number! Try again!");
    }

    else if (guesses.has(guess)) {
      console.log("Already guessed!");
    }

    else if(guess > goldenNumber) {
      guesses.add(guess);
      console.log("Too high!");
    }

    else if(guess == goldenNumber) {
      guesses.add(guess);
      console.log(`You got it! You took ${guesses.size} attempt(s)!`);
      guessed = true;
    }

    else {
      guesses.add(guess);
      console.log("Too low!");
    }
  }
  return;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

playNumberGuesser(0, 100);