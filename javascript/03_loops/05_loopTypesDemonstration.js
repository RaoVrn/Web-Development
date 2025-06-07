/*
🔁 Question 5: Demonstrate Loop Types

Task:
Write a program that prints the string "Apna College" 3 times using:
1. for loop
2. while loop
3. do-while loop

Also, use:
4. for-of loop to print each character of "Apna"
5. for-in loop to print keys of a sample object

Topics Covered:
- for, while, do-while
- for-of, for-in
- Strings and Objects

Difficulty: 🟡 Intermediate
*/

let str = "Apna College";

// for loop
for(let i=0; i<3; i++) {
	console.log(str);
}


// while loop
let j=0;
while(j<3) {
	console.log(str);
    j++;
}


//do-while loop
let k=0;

do {
	console.log(str);
    k++;
} while(k<3);


// using for-of loop to print each character of Apna
let str2 = "Apna";
for(let ch of str2) {
	console.log(ch);
}


// using for-in loop to print keys of a sample object
let obj = {
	name: "Varun",
	age: 2,
}

for(let key in obj) {
	console.log(key);
}