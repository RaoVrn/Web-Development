/*
📘 Question: Sum of Two Numbers

Task:
Create a function that takes two numbers as parameters and returns their sum.

Example:
Input: 5, 7
Output: 12

Topics Covered:
- Functions
- Return values
- Arithmetic operators

Difficulty: 🟢 Beginner
*/

let input1 = prompt("Enter first number: ");
let input2 = prompt("Enter second number: ");

num1 = Number(input1);
num2 = Number(input2);

const sum = (num1, num2) => {
	return num1 + num2;
}

console.log(sum(num1, num2));