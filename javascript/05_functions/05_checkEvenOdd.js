/*
📘 Question: Check Even or Odd

Task:
Create a function that checks if a given number is even or odd and returns a string accordingly.

Example:
Input: 4 ➝ "Even"
Input: 5 ➝ "Odd"

Topics Covered:
- Functions
- Conditionals
- Modulo operator

Difficulty: 🟢 Beginner
*/

let num = prompt("Enter the number: ");

const evenOdd = (num) => {
	if(num % 2 == 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

evenOdd(num);