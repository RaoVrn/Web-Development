/*
📘 Question: Greet User

Task:
Write a function that takes a user's name as a parameter and prints a personalized greeting message.

Example:
Input: "Varun"
Output: "Hello, Varun!"

Topics Covered:
- Functions
- Template literals

Difficulty: 🟢 Beginner
*/


let name = prompt("Enter your name: ");

const greetUser = (name) => {
    return `Hello ${name}!`;
}

greetUser(name);