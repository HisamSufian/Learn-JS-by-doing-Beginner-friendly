/**
 * 🧩 Problem 30 – Find Longest Word in a Sentence
 * ------------------------------------------------
 * Ask the user for a sentence and find the longest word.
 *
 * Example:
 * Input: "I love programming in JavaScript"
 * Output: "programming"
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a sentence: ", (input) => {
  const words = input.trim().replace(/[^\w\s]/g, "").split(/\s+/);

  if (words.length === 0 || !words[0]) {
    console.log("❌ Please enter a valid sentence.");
  } else {
    let longest = words[0];

    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }

    console.log(`✅ The longest word is: "${longest}"`);
    console.log(`📏 Length: ${longest.length}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - split(/\s+/) splits by any space(s)
 * - Compare length of each word to find the longest
 */
