/**
 * 🧩 Problem 22 – Flatten Nested Array
 * ------------------------------------
 * Ask the user for a nested array (e.g. [1,[2,3],[4,[5]]])
 * and flatten it into a single-level array.
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a nested array (example: [1,[2,3],[4,[5]]]): ", (input) => {
  try {
    // Safely parse JSON input
    const arr = JSON.parse(input);

    if (!Array.isArray(arr)) {
      console.log("❌ Please enter a valid array format (e.g. [1,[2,3]])");
    } else {
      // Option 1 – Using built-in flat (Infinite depth)
      const flatArray = arr.flat(Infinity);

      // Option 2 – Manual recursive approach
      // function flatten(arr) {
      //   let result = [];
      //   for (let item of arr) {
      //     if (Array.isArray(item)) result = result.concat(flatten(item));
      //     else result.push(item);
      //   }
      //   return result;
      // }
      // const flatArray = flatten(arr);

      console.log("✅ Flattened Array:", flatArray);
    }
  } catch (e) {
    console.log("❌ Invalid input. Please enter in valid JSON array format.");
  }
  rl.close();
});

/**
 * 💡 Explanation:
 * - `arr.flat(Infinity)` recursively flattens nested arrays.
 * - JSON.parse() lets you input a real JS-style array.
 */
