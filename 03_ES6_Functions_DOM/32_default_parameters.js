/**
 * 🧩 Problem 32 – Default Parameters (with Correct Tax Calculation)
 * ---------------------------------------------------------------
 * Demonstrate how default parameters work, with fixed tax logic (percentage handling).
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// 🔹 Arrow function with default parameters
const greet = (name = "Guest") => `👋 Hello, ${name}! Welcome!`;

// 🔹 Regular function with default taxRate
function calculatePrice(price = 100, taxRate = 0.1) {
  return price + price * taxRate;
}

console.log("🎯 Default Parameters Practice");
console.log("------------------------------");

rl.question("Enter your name (press Enter to skip): ", (inputName) => {
  const name = inputName.trim() || undefined;
  console.log(greet(name));

  rl.question("Enter product price (press Enter for default 100): ", (priceInput) => {
    const price = Number(priceInput.trim()) || undefined;

    rl.question("Enter tax rate (press Enter for default 0.1): ", (taxInput) => {
      
      // Convert tax rate to a percentage if provided
      const taxRate = taxInput.trim() 
        ? (Number(taxInput) > 0 ? Number(taxInput) / 100 : Number(taxInput)) 
        : undefined;

      // If taxRate is still NaN, use the default tax rate
      const total = calculatePrice(price, isNaN(taxRate) ? undefined : taxRate);

      console.log(`✅ Final Price: ${total}`);
      rl.close();
    });
  });
});
