/**
 * 🧩 Problem 35 – Random Number Generator
 * ---------------------------------------
 * Generate a random number between a user-specified range (inclusive).
 * Demonstrates Math.random() and input validation.
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("🎯 Random Number Generator");
console.log("------------------------------");

rl.question("Enter the minimum and maximum number (e.g. 1 100): ", (input) => {
  const [min, max] = input.trim().split(/\s+/).map(Number);

  // Validate inputs
  if ([min, max].some(isNaN) || min >= max) {
    console.log("❌ Invalid input. Please enter two numbers like '1 100' where min < max.");
    rl.close();
    return;
  }

  // Generate random number in range (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(`✅ Random number between ${min} and ${max}: ${randomNumber}`);
  rl.close();
});

/**
 * 💡 Explanation:
 * - Math.random() generates a float from 0 to 1.
 * - Multiply by (max - min + 1) to scale to range.
 * - Add min to shift the range start.
 * - Math.floor() ensures an integer result.
 */
