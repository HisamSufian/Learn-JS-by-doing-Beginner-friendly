/**
 * 🧩 Problem 2 – Simple Calculator
 * -----------------------------------------------------
 * Takes two numbers from the user and prints:
 * ➕ Sum
 * ➖ Difference
 * ✖️ Product
 * ➗ Quotient
 */

const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for first number
rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    console.log("\nResults:");
    console.log("Sum:", a + b);
    console.log("Difference:", a - b);
    console.log("Product:", a * b);
    console.log("Quotient:", b !== 0 ? a / b : "Cannot divide by zero");

    rl.close(); // Close input stream
  });
});

/**
 * 💡 :
 * - `readline` is a built-in Node module for reading user input.
 * - Always convert input strings to numbers using `parseFloat()`.
 */



/**
//OR try this simple one-->

function calculator(a, b) {
  console.log("Numbers:", a, b);
  console.log("Sum:", a + b);
  console.log("Difference:", a - b);
  console.log("Product:", a * b);
  console.log("Quotient:", a / b);
}

// 🧪 Test Cases
calculator(10, 5);
calculator(8, 2);

 */
