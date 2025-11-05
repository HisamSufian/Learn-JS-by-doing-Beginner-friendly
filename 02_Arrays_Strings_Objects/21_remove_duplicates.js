/**
 * 🧩 Problem 21 – Remove Duplicates from Array
 * --------------------------------------------
 * Ask the user for numbers (with duplicates) and remove repeated values.
 *
 * Example:
 * Input: 5 2 8 2 9 5 1
 * Output: 5 2 8 9 1
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter numbers separated by spaces (may include duplicates): ", (input) => {
  const arr = input.split(" ").map(Number);

  if (arr.some(isNaN)) {
    console.log("❌ Please enter valid numbers only.");
  } else {
    // Option 1 – Using Set (simple)
    const uniqueArray = [...new Set(arr)];

    // Option 2 – Manual check (learning version)
    // const uniqueArray = [];
    // for (let num of arr) {
    //   if (!uniqueArray.includes(num)) uniqueArray.push(num);
    // }

    console.log(`✅ Array without duplicates: ${uniqueArray.join(" ")}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - A Set stores unique values only.
 * - `[...new Set(arr)]` spreads the Set back into an array.
 * - Manual loop helps you understand how duplicate filtering works.
 */
