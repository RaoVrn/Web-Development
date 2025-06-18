/*
📘 Question: Print All Names

Task:
Given an array of names, use forEach to print each name.

Example:
Input: ["Alice", "Bob", "Charlie"]
Output: Alice Bob Charlie

Topics Covered:
- Arrays
- forEach

Difficulty: 🟡 Intermediate
*/

let arr = ["Alice", "Bob", "Charlie"];


const printNames = (arr) => {
    arr.forEach(char => {
        console.log(char);
    });
}
 
printNames(arr);