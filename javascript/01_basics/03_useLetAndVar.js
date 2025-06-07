/*
🔄 Question 3: Use let and var to declare variables

Task:
1. Create a variable using var and assign value 10.
2. Create a variable using let and assign value "hello".
3. Re-declare the var variable and change its value to 20.
4. Try re-declaring the let variable and observe the result (write in comments).

Finally, print both variables using console.log()

Topics Covered:
- var vs let
- Re-declaration and update
- Scope basics
- console.log()

Difficulty: 🟢 Beginner
*/

var num = 10;
console.log(num); // Output: 10

let str = "hello";
console.log(str);  // Output: hello


// Re-declaring the var variable
var num = 20;
console.log(num); // Output: 20

// Trying to re-declare the let variable will cause an error
// let str = "hi"; // Uncommenting this line will throw an error: Identifier 'str' has already been declared