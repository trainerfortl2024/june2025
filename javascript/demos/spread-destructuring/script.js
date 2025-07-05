// The spread operator (...):
// It allows us to expand elements of an array or properties of an object.

//Object
const person1 = { name: "Suresh", age: 30 };
const person2 = { ...person1, city: "Chennai",age:23 };

console.log(person2); // { name: 'Suresh', age: 30, city: 'Chennai' }


//Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Destructuring 
//Destructuring allows us to extract values from objects and arrays in a more concise way.

// Object Destructuring
const user = { name: "Suresh", age: 30, city: "Chennai" };
const { name, age } = user;
// const name = user.name;
// const age = user.age;

console.log(name); // Suresh
console.log(age);  // 30

// Array Destructuring
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first);  // 10
console.log(second); // 20
