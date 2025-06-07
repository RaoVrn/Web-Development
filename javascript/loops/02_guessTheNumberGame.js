/*
🎮 Question 2: Build a Number Guessing Game

Task:
- Create a random number between 1 to 100 using Math.random()
- Use a while loop to let user keep guessing using prompt() until the number is correct
- Print "Correct!" if the guess is right, else "Wrong, try again"

Topics Covered:
- Math.random()
- while loop
- prompt()
- Number conversion

Difficulty: 🟡 Intermediate
*/

let guessNumber = Math.random()* 100 + 1; // Generates a random number between 1 and 100
guessNumber = Math.floor(guessNumber); // Convert to integer
let input = prompt("Enter the number(1 to 100): ");

while(guessNumber !== input) {
	console.log("Wrong, try again");
}

console.log("Correct!");