/*
💰 Question 2: Apply 10% Discount

Task:
Given an array of item prices: [250, 645, 300, 900, 50]
- Apply 10% discount to each item
- Store and print the final prices

Topics Covered:
- Arrays
- Loops
- Percent calculations
- Updating array values

Difficulty: 🟢 Beginner
*/

let prices = [250, 645, 300, 900, 50];

for(let i=0; i<prices.length; i++) {
	offer = prices[i] * 0.1; // Calculate 10% discount
    prices[i] -= offer; // Apply discount
}

console.log("Final prices after discount:", prices);