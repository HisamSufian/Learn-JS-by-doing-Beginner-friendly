/**
 * 🧩 Problem 13 – Find Missing Number in a Sequence (Universal Version)
 * ---------------------------------------------------------------------
 * Works even if the sequence doesn’t start from 1.
 * Example:
 * 3 4 5 7 → Missing number is 6
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

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);

  // Formula for sum from min → max
  const expectedSum = (max * (max + 1)) / 2 - ((min - 1) * min) / 2;
  const missing = expectedSum - actualSum;

  if (missing === 0) {
    console.log("✅ No missing number detected (sequence is complete).");
  } else {
    console.log(`✅ Missing number is: ${missing}`);
  }

  rl.close();
});
