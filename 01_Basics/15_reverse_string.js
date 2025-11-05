/**
 * 🧩 Problem 15 – Reverse a String
 * ----------------------------------------
 * Ask the user for a string and print it in reverse order.
 *
 * Example:
 * Input: hello
 * Output: olleh
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string to reverse: ", (input) => {
  if (!input.trim()) {
    console.log("❌ Please enter a valid string.");
  } else {
    // Approach 1 – using built-in methods
    const reversed = input.split("").reverse().join("");

    // Approach 2 – manual loop (for understanding)
    // let reversed = "";
    // for (let i = input.length - 1; i >= 0; i--) {
    //   reversed += input[i];
    // }

    console.log(`✅ Reversed string: ${reversed}`);
  }

  rl.close();
});

/**
 * 💡 Explanation:
 * - split("") turns string into array of chars.
 * - reverse() reverses that array.
 * - join("") joins it back into a string.
 */
