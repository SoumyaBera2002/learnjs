"use strict";

let a = 1;

const b = 2;

var c = 3;

{
    c = c+1;
    a = a+1;
    b = b+2;// This will throw an error because 'b' is a constant and cannot be reassigned.
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);
