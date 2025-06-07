/*
👤 Question 3: Generate a Username

Task:
- Ask user to enter their full name using prompt()
- Create a username that starts with '@', followed by their full name, and ends with the length of the name
- Print the username

Example:
Input  = varunprakash
Output = @varunprakash12

Topics Covered:
- prompt()
- string concatenation
- .length property

Difficulty: 🟢 Beginner
*/

let fullName = prompt("Enter your full name: ");

let username = '@' + fullName + fullName.length;
console.log(username);