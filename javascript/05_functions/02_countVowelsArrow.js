/*
📘 Question: Count Vowels (Arrow Function)

Task:
Write an arrow function that returns the number of vowels in a string.

Example:
Input: "javascript"
Output: 3

Topics Covered:
- Arrow functions
- Strings
- Array methods

Difficulty: 🟢 Beginner
*/


let str = prompt("Enter the string: ");

const countVowels = (str) => {
	let count = 0;
	for(let char of str.toLowerCase()) {
		if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
	    count++;
	    }
    }

	return count;
}

// let res = countVowels(str);
console.log("Number of vowels in string are: ", countVowels(str));