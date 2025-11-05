/**
 * 🧩 Problem 19 – Word Frequency Counter
 * --------------------------------------
 * Ask the user for a sentence and count how many times each word appears.
 *
 * Example:
 * Input: "I love coding and I love JavaScript"
 * Output:
 * I: 2
 * love: 2
 * coding: 1
 * and: 1
 * JavaScript: 1
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a sentence: ", (input) => {
  if (!input.trim()) {
    console.log("❌ Please enter a valid sentence.");
  } else {
    // Normalize the input
    const words = input
      .toLowerCase()
      .replace(/[^\w\s]/g, "") // remove punctuation
      .split(/\s+/); // split by spaces

    const frequency = {};

    for (let word of words) {
      frequency[word] = (frequency[word] || 0) + 1;
    }

    console.log("\n✅ Word frequency count:");
    for (let key in frequency) {
      console.log(`${key}: ${frequency[key]}`);
    }
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - `.replace(/[^\w\s]/g, "")` removes punctuation.
 * - `.split(/\s+/)` splits on one or more spaces.
 * - The object stores each word as a key and its count as a value.
 */
