/*
🧮 Question 1: Check if a Number is a Multiple of 5

Task:
- Ask the user to input a number using prompt()
- Check whether the number is a multiple of 5
- Print "Multiple of 5" or "Not a multiple of 5" using console.log

Topics Covered:
- prompt()
- if-else
- modulus operator %
- console.log()

Note: prompt only works in browsers, not in Node.js

Difficulty: 🟢 Beginner
*/

let num = prompt("Enter a number");

if(num % 5 == 0) {
	console.log(num, "is a Multiple of 5");
} else {
	console.log(num, "is not a Multiple of 5");
}