/*
📘 Question 2: Count Vowels (Arrow Function)

Task:
Create an arrow function that takes a string and returns the number of vowels.

Topics Covered:
- Arrow Functions
- Strings
- Loops
- Conditionals

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