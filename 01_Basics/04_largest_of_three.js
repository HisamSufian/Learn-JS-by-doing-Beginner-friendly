/**
 * 🧩 Problem 4 – Largest of Three Numbers
 * ---------------------------------------
 * Ask the user for three numbers and print which one is the largest.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (n1) => {
  rl.question("Enter second number: ", (n2) => {
    rl.question("Enter third number: ", (n3) => {
      const a = parseFloat(n1);
      const b = parseFloat(n2);
      const c = parseFloat(n3);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("❌ Please enter valid numbers.");
      } else {
        let largest;

        if (a >= b && a >= c) largest = a;
        else if (b >= a && b >= c) largest = b;
        else largest = c;

        console.log(`✅ The largest number is: ${largest}`);
      }

      rl.close();
    });
  });
});

/**
 * 💡 Explanation:
 * - `&&` means AND — both conditions must be true.
 * - We compare numbers pairwise to find the largest.
 */
