/**
 * 🧩 Problem 11 – Prime Number Check
 * ----------------------------------
 * Ask the user for a number and determine whether it’s a prime number.
 *
 * Example:
 * 7 → Prime ✅
 * 8 → Not Prime ❌
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a positive number: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 2) {
    console.log("❌ Enter an integer greater than 1.");
    rl.close();
    return;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) console.log(`✅ ${n} is a prime number.`);
  else console.log(`❌ ${n} is not a prime number.`);

  rl.close();
});

/**
 * 💡 Explanation:
 * - Prime numbers are divisible only by 1 and themselves.
 * - Loop runs up to √n for efficiency.
 */
