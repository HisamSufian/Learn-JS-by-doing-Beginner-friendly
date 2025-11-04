/**
 * 🧩 Problem 5 – Multiplication Table
 * -----------------------------------
 * Ask the user for a number and print its multiplication table up to 10.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number to print its multiplication table: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n)) {
    console.log("❌ Please enter a valid number.");
  } else {
    console.log(`\n📘 Multiplication Table for ${n}`);
    console.log("----------------------------");

    for (let i = 1; i <= 10; i++) {
      console.log(`${n} × ${i} = ${n * i}`);
    }
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - `for (let i = 1; i <= 10; i++)` runs 10 times.
 * - Template literals (`${}`) make string + variable combinations easy.
 */
