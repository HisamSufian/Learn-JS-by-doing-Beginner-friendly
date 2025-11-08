/**
 * 🧩 Problem 27 – Sort Strings Alphabetically
 * -------------------------------------------
 * Ask the user for words separated by spaces and
 * sort them alphabetically (A → Z).
 *
 * Example:
 * Input: banana apple Cherry mango
 * Output: apple banana Cherry mango
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter words separated by spaces: ", (input) => {
  const words = input.trim().split(/\s+/);

  if (words.length === 0 || !words[0]) {
    console.log("❌ Please enter at least one word.");
  } else {
    // Case-insensitive sort using localeCompare
    const sorted = words.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

    console.log(`✅ Sorted words: ${sorted.join(" ")}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - .sort() arranges items alphabetically.
 * - localeCompare() handles uppercase/lowercase properly.
 */
