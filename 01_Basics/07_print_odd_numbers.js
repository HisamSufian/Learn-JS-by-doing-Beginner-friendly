/**
 * 🧩 Problem 7 – Print Odd Numbers 1–n
 * -----------------------------------
 * Ask the user for a number n and print all odd numbers from 1 to n.
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
    console.log(`\n✅ Odd numbers from 1 to ${n}:`);
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - `%` gives remainder after division.
 * - For odd numbers, remainder is 1 when divided by 2.
 */
