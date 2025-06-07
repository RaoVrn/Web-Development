/*
🎓 Question 2: Grade Checker using else-if

Task:
- Get marks from the user using prompt()
- Check the grade using this scheme:
  80-100 -> A
  70-79  -> B
  60-69  -> C
  50-59  -> D
  0-49   -> F
- Print the grade using console.log()

Topics Covered:
- else-if ladder
- prompt()
- comparison operators

Difficulty: 🟢 Beginner
*/

let grade = prompt("Enter the grade(1 to 100): ");

if(grade >= 80 && grade <= 100) {
	console.log("A");
} else if(grade >= 70 && grade <= 79) {
	console.log("B");
} else if(grade >= 60 && grade <= 69) {
	console.log("C");
} else if(grade >= 50 && grade <= 59) {
	console.log("D");
} else if(grade >= 0 && grade <= 49) {
	console.log("F");
}