/*
📘 Question: Sum Elements using forEach

Task:
Use forEach to calculate the total sum of an array of numbers.

Example:
Input: [10, 20, 30]
Output: 60

Topics Covered:
- Arrays
- Loops
- Accumulator pattern

Difficulty: 🟡 Intermediate
*/

let input = prompt("Enter the numbers (comman separated): ");

const numbers = input.split(',').map(num => parseInt(num.trim()));

let sum = 0;
numbers.forEach(num => {
	if(!isNaN(num)) {
		sum += num;
	}
});

console.log(sum);