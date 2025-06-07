/*
➕➖ Question 5: Check if Number is Positive, Negative, or Zero

Task:
- Ask the user to input a number
- Check whether it is:
  - Positive
  - Negative
  - Zero

Use if-else-if structure to handle all 3 cases.

Topics Covered:
- Number input with prompt()
- if-else-if
- console.log()

Difficulty: 🟢 Beginner
*/

let num = prompt("Enter the number: ");

if(num > 0) {
	console.log(num, "is Positive");
} else if(num < 0) {
	console.log(num, "is Negative");
} else {
	console.log(num, "is zero");
}