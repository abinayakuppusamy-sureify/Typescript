import { calculate } from "./function";

const addition = calculate('additon', 10, 15);
console.log("Addition :" + " " + addition);

const sub = calculate('subtraction', 75, 15);
console.log("Subtraction :" + " " + sub);

const mul = calculate('multiplication', 5, 7);
console.log("Multiplication :" + " " + mul);

const div = calculate('division', 100, 5);
console.log("Division :" + " " + div);

//outputs

// Addition : 25
// Subtraction : 60
// Multiplication : 35
// Division : 20