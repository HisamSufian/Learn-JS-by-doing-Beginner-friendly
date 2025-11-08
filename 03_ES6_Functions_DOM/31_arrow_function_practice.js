/**
 * 🧩 Problem 31 – Arrow Function Practice (with User Input, Fixed)
 * ---------------------------------------------------------------
 * Demonstrate arrow functions by taking keyboard input and ignoring extra spaces or numbers.
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// 🔹 Arrow functions
const add = (a, b) => a + b;
const square = (n) => n * n;
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
};
const greet = () => "Hello from Arrow Function!";

console.log("🎯 Arrow Function Practice");
console.log("--------------------------");

rl.question("Enter two numbers to add (e.g. 5 3): ", (input1) => {
  const nums = input1.trim().split(/\s+/).map(Number);
  const a = nums[0];
  const b = nums[1];

  if (isNaN(a) || isNaN(b)) {
    console.log("❌ Please enter two valid numbers.");
    rl.close();
    return;
  }

  console.log(`✅ add(${a}, ${b}) = ${add(a, b)}`);

  rl.question("Enter a number to square: ", (input2) => {
    const num1 = Number(input2.trim().split(/\s+/)[0]);
    if (isNaN(num1)) {
      console.log("❌ Invalid number.");
      rl.close();
      return;
    }

    console.log(`✅ square(${num1}) = ${square(num1)}`);

    rl.question("Enter a number to find factorial: ", (input3) => {
      const num2 = Number(input3.trim().split(/\s+/)[0]);
      if (isNaN(num2) || num2 < 0) {
        console.log("❌ Please enter a positive integer.");
      } else {
        console.log(`✅ factorial(${num2}) = ${factorial(num2)}`);
      }

      console.log(`💬 ${greet()}`);
      rl.close();
    });
  });
});
