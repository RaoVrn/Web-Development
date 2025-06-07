/*
✂️ Question 4: Practice String Methods

Task:
Given the string: "   Hello JS   ", perform the following operations:
1. Trim the string
2. Convert it to uppercase
3. Replace "JS" with "JavaScript"
4. Get the character at index 2
5. Get a substring from index 0 to 4

Print all the results.

Topics Covered:
- str.trim()
- str.toUpperCase()
- str.replace()
- str.charAt()
- str.slice()

Difficulty: 🟢 Beginner
*/

let str = "   Hello JS   ";

console.log("string:", str);

// trimming the string
console.log("Trimmed string:", str.trim());

// converting to upper case
console.log("Upper Case:", str.toUpperCase())

// replacing "JS" with "JavaScript"
console.log("After replacing:", str.replace("JS", "JavaScript"));

// indexing
console.log("indexing:", str[2]);

// slicing
console.log("slicing:", str.slice(0,5));
