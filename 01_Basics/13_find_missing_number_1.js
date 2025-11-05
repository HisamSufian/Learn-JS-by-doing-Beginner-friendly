/**
 * 🧩 Problem 13 – Find Missing Number in a Sequence (User Input Version)
 * ----------------------------------------------------------------------
 * Ask the user to enter a sequence of consecutive numbers with one missing,
 * and find which number is missing.
 *
 * Example:
 * Input → 1 2 3 5
 * Output → Missing number is 4
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter consecutive numbers separated by spaces: ", (input) => {
  const numbers = input.split(" ").map(Number);

  if (numbers.some(isNaN) || numbers.length < 2) {
    console.log("❌ Please enter valid numbers.");
    rl.close();
    return;
  }

  const n = numbers.length + 1; // because one is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);

  const missing = expectedSum - actualSum;

  console.log(`✅ Missing number is: ${missing}`);
  rl.close();
});

/**
 * 💡 Tip:
 * - Split converts user input into an array.
 * - map(Number) converts strings to numbers.
 * - Reduce calculates the sum efficiently.
 */
