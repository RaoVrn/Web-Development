/*
📘 Question: Count Vowels in a String

Task:
Write a function using the `function` keyword that takes a string as input and returns 
the number of vowels (a, e, i, o, u) present in the string.

Example:
Input: "hello"
Output: 2

Topics Covered:
- Functions
- Strings
- Loops
- Conditionals

Difficulty: 🟢 Beginner
*/


let str = prompt("Enter the string: ");

function countVowels(str) {
	let count = 0;
	for(let char of str.toLowerCase()) {
		if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			count++;
		}
	}

	return count;
}

let res = countVowels(str);
console.log("Number of vowels in the string:", res);