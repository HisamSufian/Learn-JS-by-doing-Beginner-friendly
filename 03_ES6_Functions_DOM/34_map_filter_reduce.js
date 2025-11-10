/**
 * 🧩 Problem 34 – Map, Filter, and Reduce Practice
 * -------------------------------------------------
 * Practice using the map, filter, and reduce methods for arrays.
 * These are powerful tools for functional programming in JavaScript.
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("🎯 Map, Filter, and Reduce Practice");
console.log("----------------------------");

rl.question("Enter numbers separated by spaces: ", (input) => {
  // Clean input and convert to an array of numbers
  const numbers = input.trim().split(/\s+/).map(Number).filter(n => !isNaN(n));

  if (numbers.length === 0) {
    console.log("❌ Please enter valid numbers.");
    rl.close();
    return;
  }

  // 🌱 Using map to square each number
  const squaredNumbers = numbers.map(num => num * num);
  console.log(`✅ Squared Numbers: ${squaredNumbers.join(" ")}`);

  // 🌱 Using filter to get even numbers
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(`✅ Even Numbers: ${evenNumbers.join(" ")}`);

  // 🌱 Using reduce to sum all numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(`✅ Sum of Numbers: ${sum}`);

  rl.close();
});

/**
 * 💡 Explanation:
 * - map() applies a function to each item and returns a new array.
 * - filter() returns an array with elements that pass a test.
 * - reduce() accumulates values in an array into a single result.
 */
