/**
 * 🧩 Problem 8 – Factorial Function
 * ---------------------------------
 * Ask the user for a number n and print its factorial.
 * Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

rl.question("Enter a positive integer: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 0) {
    console.log("❌ Please enter a valid positive number.");
  } else {
    console.log(`✅ Factorial of ${n} = ${factorial(n)}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - Factorial = n × (n-1) × ... × 1
 * - We used a loop inside a function for reusability.
 */
