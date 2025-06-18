/*
📘 Question 3: Greet a User

Task:
Write a function that takes a user's name as input and prints "Hello, [name]!"

Topics Covered:
- Functions
- Template literals

Difficulty: 🟢 Beginner
*/


let name = prompt("Enter your name: ");

const greetUser = (name) => {
    return `Hello ${name}!`;
}

console.log(greetUser(name));