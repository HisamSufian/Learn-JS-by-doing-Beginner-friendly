/**
 * 🧩 Problem 6 – Sum of Natural Numbers
 * -------------------------------------
 * Ask the user for a number n and calculate the sum from 1 to n.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a positive number: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 1) {
    console.log("❌ Please enter a valid positive number.");
  } else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(`✅ Sum of first ${n} natural numbers = ${sum}`);
  }

  rl.close();
});

/**
 * 💡 Formula: Sum = n × (n + 1) / 2
 * But we used a loop to practice iteration concept.
 */
