/**
 * 🧩 Problem 25 – Word Occurrence Counter (Enhanced)
 * -------------------------------------------------
 * Count how many times each word appears in a paragraph,
 * ignoring case and punctuation, and display the results sorted by frequency.
 *
 * Example:
 * Input: "JavaScript is fun. I love JavaScript!"
 * Output:
 * javascript: 2
 * is: 1
 * fun: 1
 * i: 1
 * love: 1
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a sentence or paragraph: ", (input) => {
  if (!input.trim()) {
    console.log("❌ Please enter valid text.");
  } else {
    // Normalize text
    const words = input
      .toLowerCase()
      .replace(/[^\w\s]/g, "") // remove punctuation
      .split(/\s+/); // split by spaces

    const count = {};

    for (const word of words) {
      count[word] = (count[word] || 0) + 1;
    }

    // Sort words by frequency (descending)
    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);

    console.log("\n✅ Word Frequency (sorted):");
    for (const [word, freq] of sorted) {
      console.log(`${word}: ${freq}`);
    }
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - Object.entries() turns the object into [key, value] pairs.
 * - .sort((a,b)=>b[1]-a[1]) sorts by frequency (highest first).
 * - Regular expressions clean up punctuation and case issues.
 */
