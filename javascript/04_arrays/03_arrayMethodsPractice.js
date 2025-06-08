/*
🧰 Question 3: Array Methods Practice

Task:
Create an array of companies: ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

Then perform the following:
a. Remove the first company
b. Remove "Uber" & add "Ola" in its place
c. Add "Amazon" at the end

Print the final array.

Topics Covered:
- Array manipulation
- shift(), splice(), push()

Difficulty: 🟢 Beginner
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove the first company
companies.shift();

// Remove "Uber" & add "Ola" in its place
companies.splice(1,1,"Ola");

// Add "Amazon" at the end
companies.push("Amazon");

console.log("Final array:", companies);