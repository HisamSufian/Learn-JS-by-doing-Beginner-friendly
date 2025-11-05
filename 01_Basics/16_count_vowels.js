/**
 * 🧩 Problem 16 – Count Vowels in a String
 * ---------------------------------------
 * Ask the user for a string and count how many vowels it contains.
 *
 * Example:
 * Input: JavaScript
 * Output: 3 vowels (a, a, i)
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", (input) => {
  if (!input.trim()) {
    console.log("❌ Please enter a valid string.");
  } else {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of input) {
      if (vowels.includes(char)) {
        count++;
      }
    }

    console.log(`✅ The string "${input}" contains ${count} vowel(s).`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - `includes()` checks if a character is in the vowels string.
 * - Case-sensitive handled by including both lowercase + uppercase.
 */
