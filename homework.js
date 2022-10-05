/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* Data types describe the different types of data that we will work with and save in variables, we have 5 kind of data:
   strings, numbers, booleans, undefined, and null. */

   let firstExercise = "Data types describe the different types of data that we will work with and save in variables"
   console.log("\nDescribe data types:" ,firstExercise)
   
   let allDatas = "We have 5 kinds of data: strings, numbers, booleans, undefined, and null."
   console.log("How many kinds of data do we have:" ,allDatas)

   let finalExamOfThisExercise = firstExercise + allDatas

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* Variables are containers for saving data or are labels that references a value like a number or string*/
/* Variables dont value numbers or strings*/

let firstVariable = "Variables are containers for saving data and also are labels that references a value like a number or string"
console.log("\nWhat is a Variable?" , firstVariable)

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */

let firstNumber = 12
let secondNumber = 20

let findTheSum = firstNumber + secondNumber
console.log("\nThe sum of numbers is:" , findTheSum)
let findTheSum1 = secondNumber =firstNumber
console.log("The sum of the number is:" ,findTheSum1)
let findTheSum2 = firstNumber * secondNumber
console.log("The sum of the number is:" ,findTheSum2)
let findTheSum3 = firstNumber / secondNumber
console.log("The sum of the number is:" ,findTheSum3)
let findTheSum4 = firstNumber % secondNumber
console.log("The sum of the number is:" ,findTheSum4)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* Write your answer here */
let x = 12
console.log("\nthis variable number is:" ,x)

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */
let Name = "John Doe"
console.log("\nHis name is:" ,Name)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */

let y = 12
console.log("\nYpsilon is:" ,y)
let subtractTheNumbers = x - y
console.log("the subtraction is:" ,subtractTheNumbers)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */

let name1 = "john"
let name2 = "John"

let areTheyDifferent = name1 === "john" || name2 === "John"
console.log("\nare they different:",areTheyDifferent)

let areTheyDifferent1 = name1 && name2 && false
console.log("are they different" , areTheyDifferent1)

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */

let xx = 9;
let literalNumber;

if (xx === 0) {
  console.log("zero");
} else if (xx === 1) {
  console.log("one");
} else if (xx === 2) {
  console.log("two");
} else if (xx === 3) {
  console.log("three");
} else if (xx === 4) {
  console.log("four"); 
} else if (xx === 5) {
  console.log("five");
} else if (xx === 6) {
  console.log("six");
} else if (xx === 7) {
  console.log("seven");
} else if (xx === 8) {
  console.log("eight");
} else if (xx === 9) {
  console.log("nine"); 
} 
console.log(literalNumber)

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* Ternary Operator */

let walletBudget = 45
let entranceTicket = 15
let transportCost = 5

//when i pay the entrance online transport is free

total =
  walletBudget >= 50
    ? walletBudget 
    : walletBudget > 40 
    ? walletBudget - entranceTicket 
    : walletBudget - transportCost 

console.log('\nYour total is  ' + total + '.  do i have enough money?')


