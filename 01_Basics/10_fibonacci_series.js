/**
 * 🧩 Problem 10 – Fibonacci Series
 * -------------------------------
 * Ask the user for n and print the first n Fibonacci numbers.
 *
 * Example: 0, 1, 1, 2, 3, 5, 8, ...
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the number of terms: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 1) {
    console.log("❌ Please enter a valid positive number.");
  } else {
    let a = 0, b = 1;
    console.log(`\n✅ First ${n} Fibonacci numbers:`);
    for (let i = 1; i <= n; i++) {
      console.log(a);
      const next = a + b;
      a = b;
      b = next;
    }
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - The Fibonacci series starts with 0 and 1.
 * - Each new term = sum of the previous two.
 */
