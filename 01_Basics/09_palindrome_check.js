/**
 * 🧩 Problem 9 – Palindrome Check
 * -------------------------------
 * Ask the user for a word and check if it reads the same backward and forward.
 * Example: "madam" → Palindrome ✅
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a word: ", (input) => {
  const str = input.toLowerCase(); // make it case-insensitive
  const reversed = str.split("").reverse().join("");

  if (str === reversed) {
    console.log(`✅ "${input}" is a palindrome.`);
  } else {
    console.log(`❌ "${input}" is not a palindrome.`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - `.split("")` turns string into an array of characters.
 * - `.reverse()` reverses that array.
 * - `.join("")` joins it back into a string.
 */
