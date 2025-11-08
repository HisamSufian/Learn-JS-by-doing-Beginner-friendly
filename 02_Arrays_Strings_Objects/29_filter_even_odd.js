/**
 * 🧩 Problem 29 – Filter Even / Odd Numbers
 * -----------------------------------------
 * Ask the user for an array of numbers and show
 * two new arrays — one for even numbers and one for odd numbers.
 *
 * Example:
 * Input: 1 2 3 4 5 6
 * Output:
 * Even: 2 4 6
 * Odd: 1 3 5
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter numbers separated by spaces: ", (input) => {
  const arr = input.trim().split(/\s+/).map(Number);

  if (arr.some(isNaN) || arr.length === 0) {
    console.log("❌ Please enter valid numbers.");
  } else {
    const even = arr.filter((num) => num % 2 === 0);
    const odd = arr.filter((num) => num % 2 !== 0);

    console.log(`✅ Even Numbers: ${even.join(" ") || "None"}`);
    console.log(`✅ Odd Numbers: ${odd.join(" ") || "None"}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - filter() creates a new array based on the condition.
 * - num % 2 === 0 checks for even numbers.
 * - num % 2 !== 0 checks for odd numbers.
 */
