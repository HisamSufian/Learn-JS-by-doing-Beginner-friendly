/**
 * 🧩 Problem 20 – Number Guessing Game (Console)
 * ---------------------------------------------
 * The program picks a random number between 1 and 100.
 * The user must guess until they get it right.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("🎲 Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100...");

const askGuess = () => {
  rl.question("Enter your guess: ", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("❌ Please enter a valid number between 1 and 100.");
      askGuess(); // ask again
    } else if (guess === randomNumber) {
      console.log(`✅ Correct! The number was ${randomNumber}.`);
      console.log(`🎯 You guessed it in ${attempts} attempt(s).`);
      rl.close();
    } else if (guess < randomNumber) {
      console.log("📉 Too low! Try again.");
      askGuess();
    } else {
      console.log("📈 Too high! Try again.");
      askGuess();
    }
  });
};

askGuess();

/**
 * 💡 Explanation:
 * - Math.random() gives a decimal 0–1, we scale it to 1–100.
 * - The recursive function askGuess() keeps prompting until correct.
 */
