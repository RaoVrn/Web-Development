/*
📘 Question: Square Each Number using forEach

Task:
Print the square of each number in an array using the forEach loop.

Example:
Input: [1, 2, 3]
Output: 1 4 9

Topics Covered:
- Arrays
- Loops
- forEach

Difficulty: 🟡 Intermediate
*/

// Step 1: Ask user to enter numbers separated by commas
let input = prompt("Enter the array of numbers (comman separated): ");

let numbers = input.split(',').map(num => parseInt(num.trim()));

numbers.forEach(num => {
	if(!isNaN(num)) {
		console.log(num*num);
	}
});