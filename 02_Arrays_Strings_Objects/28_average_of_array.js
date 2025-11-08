/**
 * 🧩 Problem 28 – Average of Array Elements
 * -----------------------------------------
 * Ask the user for an array of numbers and find their average.
 *
 * Example:
 * Input: 10 20 30 40
 * Output: Average = 25
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter numbers separated by spaces: ", (input) => {
  const arr = input.trim().split(/\s+/).map(Number);

  if (arr.some(isNaN) || arr.length === 0) {
    console.log("❌ Please enter valid numbers.");
  } else {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const avg = sum / arr.length;
    console.log(`✅ Average of the array elements: ${avg}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - reduce() calculates total sum.
 * - Divide by array length for the mean.
 * - trim() + split(/\s+/) ensures clean input.
 */
