"use strict";

let num1 = 10;
let num2 = 20.1011;
let inf1 = Infinity;
let inf2 = -Infinity;
let nan1 = NaN;


console.log("-------------------------------------------")

console.log(num1);
console.log(num2);
console.log(inf1);
console.log(inf2);
console.log(nan1);

console.log("-------------------------------------------")

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof inf1);
console.log(typeof inf2);
console.log(typeof nan1);
console.log("-------------------------------------------")

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log("-------------------------------------------")

let name = "John Doe";
let hello1 = "Hello, " + name + "! Welcome to JavaScript.";

let hello2 = `Hello, ${name}! Welcome to JavaScript.`;

let msg = "This is a string with a newline character.\nAnd this is on a new line.";

console.log(name);
console.log(hello1);
console.log(hello2);
console.log("-------------------------------------------")

let isActive = true;
let isLoggedIn = false;
let isAdult = true;

console.log(isActive);
console.log(isLoggedIn);
console.log(isAdult);
console.log("-------------------------------------------")

let user = null;
let data;
let undefinedValue = undefined;
console.log(user);
console.log(data);
console.log(undefinedValue);
console.log(typeof user);
console.log(typeof data);
console.log(typeof undefinedValue); 

let id = Symbol("id");
let anotherId = Symbol("id");
let user1 = {
  name: "Soumya",
  age: 22
};
console.log(id);
console.log(anotherId);
console.log(user1);
let nums = [1, 2, 3];
console.log(nums);
