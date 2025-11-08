/**
 * 🧩 Problem 30 – Find Longest Word in a Sentence 2
 * ----------------------------------------------------------
 * Ask the user for a sentence and show all words with the maximum length.
 *
 * Example:
 * Input: "I love coding and eating pizza"
 * Output:
 * Longest word(s): coding, eating, pizza (length: 6)
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a sentence: ", (input) => {
  const words = input.trim().split(/\s+/);

  if (words.length === 0 || !words[0]) {
    console.log("❌ Please enter a valid sentence.");
  } else {
    // Find the maximum word length
    const maxLen = Math.max(...words.map((w) => w.length));

    // Filter all words having that length
    const longestWords = words.filter((w) => w.length === maxLen);

    console.log(`✅ Longest word(s): ${longestWords.join(", ")}`);
    console.log(`📏 Length: ${maxLen}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - Math.max(...words.map(w => w.length)) finds the largest length.
 * - .filter() collects all words having that max length.
 */
