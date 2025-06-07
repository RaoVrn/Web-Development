/*
🔗 Question 3: Practice Logical Operators

Task:
Create a program that:
- Asks user for age and country
- If age is greater than 18 AND country is "India", print "Eligible"
- Otherwise, print "Not eligible"

Also, show the use of logical NOT (!) in an example.

Topics Covered:
- logical AND (&&)
- logical OR (||)
- logical NOT (!)
- prompt()

Difficulty: 🟢 Beginner
*/

let age = prompt("Enter your age: ");
let country = prompt("Enter your country: ");

if(age > 18 && country === "India") {
	console.log("Eligible");
} else {
	console.log("Not Eligible");
}


// NOT example
let loggedIn = false;
console.log(!loggedIn); // true