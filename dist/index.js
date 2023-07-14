"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
const addition = (0, function_1.calculate)('additon', 10, 15);
console.log("Addition :" + " " + addition);
const sub = (0, function_1.calculate)('subtraction', 75, 15);
console.log("Subtraction :" + " " + sub);
const mul = (0, function_1.calculate)('multiplication', 5, 7);
console.log("Multiplication :" + " " + mul);
const div = (0, function_1.calculate)('division', 100, 5);
console.log("Division :" + " " + div);
//outputs
// Addition : 25
// Subtraction : 60
// Multiplication : 35
// Division : 20
