// function add(a,b){
//     return a+b
// }



// let arr = [1,2,3]
// console.log(arr)
// // newArr = [...arr, 4, 5, 6] // Spread operator to add elements

// console.log(arr)

// const person = {name: "Alice", age: 30, isStudent: false};
// console.log(person)

// const updatedPerson = {...person, age: 31}; // Spread operator to update object
// console.log(updatedPerson); // Output: { name: 'Alice', age: 31, isStudent: false }


// // HOF

// function add(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// function multiply(x, y) {
//     return x * y;
// }
// function doMath(fn,x,y) {
//         return fn(x,y);
// }
// console.log(doMath(multiply, 5, 10)); // Output: 15







// Pure Function
function multiply(a, b) {
  return a * b;  // always returns the same result for the same inputs
}

// Higher-Order Function
function applyOperation(arr, operation) {
  return arr.map(operation);  // applies the passed function to each element
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const doubled = applyOperation(numbers, (num) => multiply(num, 2));

console.log(doubled); // [2, 4, 6, 8, 10]

// other examples
const numbers2 = [1, 2, 3, 4];
const squared = numbers2.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]

//filter
const ages = [15, 22, 18, 30, 14];
const adults = ages.filter((age) => {return age >= 18} );
adults = [22,]
console.log(adults); // [22, 18, 30]



