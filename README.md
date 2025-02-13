Part A: Theory Questions (10 Marks)
(2 Marks) List all the primitive data types in JavaScript and give a brief explanation of each.


(1 Mark) What is the difference between null and undefined in JavaScript?


(1 Mark) Explain the difference between primitive and reference data types in JavaScript.


(1 Mark) What is the typeof operator used for? Provide two examples.


(2 Marks) Explain the concept of type coercion in JavaScript. Provide an example of implicit type coercion.


(1 Mark) What is the difference between == and === in JavaScript?


(2 Marks) Define and differentiate between mutable and immutable data types in JavaScript, providing one example for each.


Part B: Coding Questions (10 Marks)
(2 Marks) Write a JavaScript function that takes a parameter and returns its data type using the typeof operator.

 function checkDataType(value) {
    // Your code here
}

console.log(checkDataType(42)); // Example Output: "number"


(2 Marks) Write a program that demonstrates the difference between null, undefined, and an empty string.


(2 Marks) Declare a variable using const and try to reassign it. What happens? Explain your answer in a comment.


(2 Marks) Given the following array, update the third element to "Banana" and log the updated array:
 let fruits = ["Apple", "Mango", "Orange"];


(2 Marks) Write a function that checks if a given variable is an object and not null.

 function isObject(variable) {
    // Your code here
}

console.log(isObject({ name: "John" })); // Output: true
console.log(isObject(null)); // Output: false

Bonus Question (Optional - 5 Marks)
12. Write a JavaScript function that takes two different data types and checks if they are strictly equal (===). If they are not, explain why in a return message.
function strictEqualityCheck(a, b) {
    // Your code here
}

console.log(strictEqualityCheck(5, "5")); // Output: "5 and '5' are not strictly equal because one is a number and the other is a string."
