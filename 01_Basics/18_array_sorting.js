/**
 * 🧩 Problem 18 – Array Sorting (Bubble Sort)
 * -------------------------------------------
 * Ask the user for a list of numbers and sort them in ascending order.
 *
 * Example:
 * Input: 5 1 4 2 8
 * Output: 1 2 4 5 8
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const arr = input.split(" ").map(Number);

  if (arr.some(isNaN) || arr.length < 2) {
    console.log("❌ Please enter at least two valid numbers.");
  } else {
    // Bubble Sort Algorithm
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    console.log(`✅ Sorted array (ascending): ${arr.join(" ")}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - Outer loop: controls number of passes.
 * - Inner loop: compares and swaps adjacent elements.
 * - Each pass pushes the largest number to the end.
 */
