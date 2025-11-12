/**
 * 🧩 Problem 36 – Stopwatch Timer (Console)
 * -----------------------------------------
 * Stable and clean version for terminal-based stopwatch.
 *
 * ✅ Keeps input visible while timer runs
 * ✅ Prevents line overlap
 * ✅ Warns if already running
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// 🖥️ Print program header and available commands.
//
console.log("🎯 Stopwatch Timer (Console)");
console.log("-------------------------------");
console.log("Type one of the commands below:");
console.log("▶ start  | ⏸ stop  | 🔁 reset  | ❌ exit");
console.log("");

// Variables to track stopwatch state.
//
let seconds = 0;         
let milliseconds = 0;   
let timer = null;       

//
const displayTime = () => {
  const formattedTime = `${seconds}.${milliseconds.toString().padStart(2, "0")}`;
  readline.moveCursor(process.stdout, 0, -1);  // move cursor one line up
  readline.clearLine(process.stdout, 0);       // clear that line
  process.stdout.write(`\r⏱  Elapsed Time: ${formattedTime} seconds\n`);
  rl.prompt(true);                             // show prompt again below the timer
};

//
// Starts the stopwatch by calling setInterval() every 10 milliseconds.
// setInterval(fn, delay) repeatedly calls a function after the specified delay.
// The interval is cleared later using clearInterval(timer).
//
const startTimer = () => {
  if (timer) {
    console.log("⚠️  Timer is already running!");
    return;
  }

  timer = setInterval(() => {
    milliseconds++;
    if (milliseconds >= 100) {  
      milliseconds = 0;
      seconds++;
    }
    displayTime();
  }, 10); 

  console.log("▶ Timer started.");
};

//
// clearInterval(timer) stops the setInterval() loop.
//
const stopTimer = () => {
  if (!timer) {
    console.log("⚠️  Timer is not running!");
    return;
  }
  clearInterval(timer);
  timer = null;
  console.log("\n⏸ Timer stopped.");
};

//
const resetTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  seconds = 0;
  milliseconds = 0;
  console.log("\n🔁 Timer reset to 0.00 seconds.");
  displayTime();
};

//
// • rl.close() closes the readline interface (stops listening for input).
// • process.exit(0) ends the Node process immediately (0 = success code).
// A small delay ensures flushes the output before exit.
//
const exitProgram = () => {
  clearInterval(timer);
  console.log("\n👋 Exiting Stopwatch. Goodbye!");
  rl.close();
  setTimeout(() => process.exit(0), 150); 
};

//
// Command Listener
// The readline interface emits a "line" event whenever the user presses Enter.
//
rl.on("line", (input) => {
  const command = input.trim().toLowerCase();

  switch (command) {
    case "start":
      startTimer();
      break;
    case "stop":
      stopTimer();
      break;
    case "reset":
      resetTimer();
      break;
    case "exit":
      exitProgram();
      return; // prevent another prompt after exit
    default:
      console.log("❌ Invalid command. Use: start | stop | reset | exit");
  }

  rl.prompt(true); // re-display input prompt
});

//
// 🏁 Initial Prompt
// Sets the prompt symbol and shows it once at startup.
//
rl.setPrompt("> ");
rl.prompt(true);
