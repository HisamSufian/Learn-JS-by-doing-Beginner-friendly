/**
 * 🧩 Problem 3 – Even or Odd Checker
 * ----------------------------------
 * Ask the user for a int number and tell whether it’s even or odd.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", (num) => {
  const n = parseInt(num);

  if (isNaN(n)) {
    console.log("❌ Please enter a valid number.");
  } else if (n % 2 === 0) {
    console.log(`✅ ${n} is even.`);
  } else {
    console.log(`✅ ${n} is odd.`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - `%` gives the remainder.
 * - Even numbers have remainder 0 when divided by 2.
 */
