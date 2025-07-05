# Functional Programming
Functional Programming is a programming paradigm that treats computation as the evaluation of mathematical functions.

# Key Aspects
Pure Functions
Immutability 
First-Class Functions 
Higher-Order Functions 
Avoid Side Effects

# Pure Function
These are functions that, given the same inputs, will always return the same output without altering any outside state. 
### Example
```js
function add(a,b){
    return a+b
}
```
# Immutability 
In FP, data is immutable, meaning once a value is set, it can't be changed. Instead of modifying data, new data is created. Example: Instead of modifying an array, we create a new array.
```js
let arr = [1,2,3]
console.log(arr)
// newArr = [...arr, 4, 5, 6] // Spread operator to add elements

console.log(arr)

const person = {name: "Alice", age: 30, isStudent: false};
console.log(person)
const updatedPerson = {...person, age: 31}; // Spread operator to update object
console.log(updatedPerson); // Output: { name: 'Alice', age: 31, isStudent: false }
```


## First-Class Functions 
function f1() {

}
function f2(f1) {
    
}





## Higher Order Functions:


