/*
📊 Question 1: Calculate Average of Marks

Task:
Given an array of student marks: [85, 97, 44, 37, 76, 60]
- Calculate the average marks
- Print the average

Topics Covered:
- Arrays
- Looping through arrays
- Arithmetic operations

Difficulty: 🟢 Beginner
*/

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
for(let i=0; i<marks.length;i++) {
	sum += marks[i];
}

console.log("Average marks =", sum/marks.length);