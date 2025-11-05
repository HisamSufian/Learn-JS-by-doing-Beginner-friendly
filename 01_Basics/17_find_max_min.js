/**
 * 🧩 Problem 17 – Find Max & Min in an Array
 * ------------------------------------------
 * Ask the user for numbers and find the largest and smallest value.
 *
 * Example:
 * Input: 5 12 8 3 9
 * Output: Max = 12, Min = 3
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const arr = input.split(" ").map(Number);

  if (arr.some(isNaN) || arr.length === 0) {
    console.log("❌ Please enter valid numbers.");
  } else {
    // Approach 1 – using built-in Math functions
    const maxVal = Math.max(...arr);
    const minVal = Math.min(...arr);

    // Approach 2 – manual loop
    // let maxVal = arr[0];
    // let minVal = arr[0];
    // for (let num of arr) {
    //   if (num > maxVal) maxVal = num;
    //   if (num < minVal) minVal = num;
    // }

    console.log(`✅ Maximum number: ${maxVal}`);
    console.log(`✅ Minimum number: ${minVal}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - Math.max(...arr) spreads the array into individual arguments.
 * - The manual loop version helps you understand comparison logic.
 */
