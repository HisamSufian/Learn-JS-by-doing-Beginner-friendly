/**
 * 🧩 Problem 33 – Destructuring Arrays & Objects
 * ---------------------------------------------
 * Practice extracting values from arrays and objects using destructuring.
 * This demonstrates how to pull out specific values from complex structures 
 * and assign sensible default values when those keys or indices are missing.
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("🎯 Destructuring Practice");
console.log("----------------------------");

// 🌱 Destructuring Arrays
rl.question("Enter an array of numbers separated by spaces: ", (inputArray) => {
    // Clean input and convert to array of numbers
    const arr = inputArray.trim().split(/\s+/).map(Number).filter(n => !isNaN(n));

    // --- ARRAY DESTRUCTURING ---
    // Extract elements by position. If the third position is empty (e.g., input "1 2"), 
    // it defaults to 0. The rest of the array elements are ignored.
    const [first, second, third = 0] = arr;

    console.log(`✅ First number: ${first}`);
    console.log(`✅ Second number: ${second}`);
    console.log(`✅ Third number (default): ${third}`);

    // 🌱 Destructuring Objects
    rl.question("Enter an object in JSON format (e.g. {\"name\":\"John\", \"age\":25}): ", (inputObj) => {
        try {
            const obj = JSON.parse(inputObj);
            
            // Ensure obj is an actual object before destructuring
            if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
                 throw new Error("Input is not a valid object.");
            }

            // --- OBJECT DESTRUCTURING ---
            // Extract 'name' and 'age' properties. If either property does not exist in 'obj', 
            // the specified default ('Guest' or 30) is used instead.
            const { name = "Guest", age = 30 } = obj; 

            console.log(`✅ Name: ${name}`);
            console.log(`✅ Age: ${age}`);
        } catch (error) {
            console.log("❌ Invalid JSON object or format.");
            // console.log(`Error details: ${error.message}`); // For debugging
        }

        rl.close();
    });
});

/**
 * 💡 Explanation:
 * * 1. Array Destructuring: 
 * The syntax `const [a, b, c = defaultValue] = array;` extracts elements based on their index. 
 * `c = defaultValue` ensures a fallback if the index is out of bounds.
 * * 2. Object Destructuring:
 * The syntax `const { keyA, keyB = defaultValue } = object;` extracts properties based on their key name.
 * `keyB = defaultValue` ensures a fallback if the key is missing in the object.
 * * 3. JSON.parse(): 
 * This is essential for the object example, as user input is always a string, 
 * and it must be converted into a functional JavaScript object before destructuring can occur.
 */