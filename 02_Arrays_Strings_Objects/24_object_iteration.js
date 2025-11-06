/**
 * 🧩 Problem 24 – Object Iteration
 * ---------------------------------
 * Given an object, loop through its keys and values and print them.
 *
 * Example:
 * Input Object: { name: "Ali", age: 20, city: "Dhaka" }
 * Output:
 * name: Ali
 * age: 20
 * city: Dhaka
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter an object in JSON format (e.g. {\"name\":\"Ali\",\"age\":20}): ", (input) => {
  try {
    const obj = JSON.parse(input);

    if (typeof obj !== "object" || Array.isArray(obj)) {
      console.log("❌ Please enter a valid JSON object (not an array).");
    } else {
      console.log("\n✅ Object contents:\n");

      // Option 1 – for...in loop
      for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
      }

      // Option 2 – Object.entries()
      // Object.entries(obj).forEach(([k, v]) => console.log(`${k}: ${v}`));
    }
  } catch (err) {
    console.log("❌ Invalid JSON input. Please follow proper syntax.");
  }
  rl.close();
});

/**
 * 💡 Explanation:
 * - JSON.parse() turns text input into a real object.
 * - for...in loops through keys in objects.
 * - Object.entries(obj) gives [key, value] pairs for iteration.
 */
