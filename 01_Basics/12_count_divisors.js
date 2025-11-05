/**
 * 🧩 Problem 12 – Count Divisors of a Number
 * ------------------------------------------
 * Ask the user for a positive number and count how many divisors it has.
 *
 * Example:
 * 6 → Divisors are 1, 2, 3, 6 → Count = 4
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
    rl.close();
    return;
  }

  let count = 0;
  let divisors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      count++;
    }
  }

  console.log(`✅ Divisors of ${n}: ${divisors.join(", ")}`);
  console.log(`📊 Total divisors = ${count}`);

  rl.close();
});

/**
 * 💡 Explanation:
 * - A divisor divides the number completely (remainder = 0).
 * - We check all numbers from 1 to n.
 */
