/*
✂️ Question 5: Slice vs Splice Demo

Task:
Create an array: ["apple", "banana", "mango", "grape", "kiwi"]

1. Use slice to extract "banana", "mango"
2. Use splice to remove "grape" and insert "pineapple", "papaya" in its place
3. Print the final array and the result of slice

Topics Covered:
- slice()
- splice()
- Array indexing

Difficulty: 🟡 Intermediate
*/

let fruits = ["apple", "banana", "mango", "grape", "kiwi"];

// Use slice to extract "banana", "mango"
console.log(fruits.slice(1, 3));

// Use splice to remove "grape" and insert "pineapple", "papaya" in its place
console.log(fruits.splice(3, 1, "pineapple", "papaya"));

// Print the final array and the result of slice
console.log(fruits);