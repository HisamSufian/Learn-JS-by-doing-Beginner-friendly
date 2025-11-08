/**
 * 🧩 Problem 26 – Merge Two Arrays
 * --------------------------------
 * Ask the user for two arrays of numbers and merge them into one.
 * Optionally, remove duplicates for a clean merged array.
 *
 * Example:
 * Input 1: 1 2 3
 * Input 2: 3 4 5
 * Output: [1, 2, 3, 4, 5]
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const getArray = (question, callback) => {
  rl.question(question, (input) => {
    const arr = input.split(" ").map(Number);
    if (arr.some(isNaN)) {
      console.log("❌ Please enter valid numbers.");
      rl.close();
    } else {
      callback(arr);
    }
  });
};

getArray("Enter the first array (numbers separated by spaces): ", (arr1) => {
  getArray("Enter the second array (numbers separated by spaces): ", (arr2) => {
    // Merge arrays
    //const merged = [...arr1, ...arr2];
    const merged = arr1.concat(arr2)

    // Optionally remove duplicates
    const uniqueMerged = [...new Set(merged)];

    console.log("\n✅ Merged Array:", merged.join(" "));
    console.log("✅ Unique Merged Array:", uniqueMerged.join(" "));

    rl.close();
  });
});

/**
 * 💡 Explanation:
 * - `[...arr1, ...arr2]` uses spread syntax to merge arrays.
 * - `new Set()` removes duplicates automatically.
 * - You can easily modify this for string arrays too.
 */
