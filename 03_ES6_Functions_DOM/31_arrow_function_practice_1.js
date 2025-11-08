/**
 * 🧩 Problem 31 – Arrow Function Practice
 * ---------------------------------------
 * Convert normal functions into arrow functions.
 */

//
// 1️⃣ Traditional Function
//
function add(a, b) {
  return a + b;
}

//
// 2️⃣ Equivalent Arrow Function
//
const addArrow = (a, b) => a + b;

//
// 3️⃣ Arrow Function with One Parameter
//
const square = n => n * n;

//
// 4️⃣ Arrow Function with No Parameters
//
const greet = () => console.log("Hello from Arrow Function!");

//
// 5️⃣ Arrow Function with Multiple Lines
//
const factorial = n => {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
};

//
// 🧪 Testing
//
console.log("add(5,3) = ", addArrow(5, 3));
console.log("square(4) = ", square(4));
greet();
console.log("factorial(5) = ", factorial(5));

/**
 * 💡 Explanation:
 * - Arrow functions provide shorter syntax.
 * - Implicit return for single-line expressions.
 * - For multi-line logic, use { } and return keyword.
 */
