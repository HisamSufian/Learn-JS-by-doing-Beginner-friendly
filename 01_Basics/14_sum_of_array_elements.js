/**
 * 🧩 Problem 14 – Sum of Array Elements
 * -------------------------------------
 * Ask the user for an array of numbers and calculate their total sum.
 *
 * Example:
 * Input: 5 10 15 20
 * Output: 50
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const arr = input.split(" ").map(Number);

  if (arr.some(isNaN)) {
    console.log("❌ Please enter only numbers.");
  } else {
    // You can use either loop or reduce:
    // Using reduce:
    const sum = arr.reduce((acc, num) => acc + num, 0);

    console.log(`✅ The sum of the array elements is: ${sum}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - split(" ") → turns input into array of strings
 * - map(Number) → converts each string to number
 * - reduce((a,b) => a+b, 0) → calculates sum
 */
