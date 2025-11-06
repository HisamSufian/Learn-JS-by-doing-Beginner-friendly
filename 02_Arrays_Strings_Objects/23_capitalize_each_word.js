/**
 * 🧩 Problem 23 – Capitalize Each Word
 * ------------------------------------
 * Ask the user for a sentence and convert it so that
 * each word starts with a capital letter.
 *
 * Example:
 * Input: hello world from javascript
 * Output: Hello World From Javascript
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a sentence: ", (input) => {
  if (!input.trim()) {
    console.log("❌ Please enter a valid sentence.");
  } else {
    // Split into words
    const words = input.split(" ");

    // Capitalize each
    const capitalized = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    console.log(`✅ Capitalized Sentence: ${capitalized}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - charAt(0).toUpperCase() capitalizes first letter.
 * - slice(1) takes the rest of the string.
 * - map() applies this logic to all words.
 */
