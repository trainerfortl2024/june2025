// //ECMAScript is the official standard that JavaScript follows, 
// // and every new version of JavaScript—whether it's ES5, ES6, 
// // or beyond—comes with new features and improvements based on this standard.

// // Datatypes in JavaScript
// // JavaScript has several built-in data types that can be categorized into two main groups:
// let age = 25; // Number
// let name = "John"; // String
// let isStudent = true; // Boolean  

// console.log("Age:", age); // Output: Age: 25
// console.log("Name:", name); // Output: Name: John
// console.log("Is Student:", isStudent); // Output: Is Student: true

// console.log(typeof age); // Output: number

// // Objects in JavaScript
// let person = {
//     name: "Alice",
//     age: 30,
//     isStudent: false,
//     greet:  function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };
// //Accessing object properties
// console.log("Person Name:", person.name); // Output: Person Name: Alice 
// console.log("Person Age:", person.age); // Output: Person Age: 30
// console.log("Is Person a Student?", person.isStudent); // Output: Is Person a Student? false
// console.log("Person Greet Function:", person.greet); // Output: Person Greet Function: [Function: greet]
// person.greet(); // Output: Hello, my name is Alice




// Arrays in JavaScript | List
// let numbers = [1, 2, 3, 4, 5]; // Array of Numbers
// let fruits = ["Apple", "Banana", "Cherry"]; // Array of Strings 

let courses = ["Frontend", "Backend", "Fullstack"]; // Array of Strings
console.log("Courses:", courses); // Output: Courses: [ 'Frontend', 'Backend',

function displayCourses() {
    document.getElementById("courseList").innerHTML = ""; // Clear existing list
    for (let i = 0; i < courses.length; i++) {
        let listitem = document.createElement("li");
        listitem.textContent = courses[i];
        document.getElementById("courseList").appendChild(listitem);
    }
}

displayCourses();

function addCourse() {

    let newCourse = document.getElementById("newName").value;
    let exists = false;//
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].toLowerCase() === newCourse.toLowerCase()) { //java
            exists = true;
            break;
        }
    }

    if (exists) {
        alert("Course already exists.");
        return; // Exit the function if course already exists
    }
    if (newCourse) {//if(false) // if(newcourse)
        courses.unshift(newCourse);// push()
    }
    else {
        alert("Please enter a course name.");
    }
    displayCourses();
}

function removeCourse() {
    let courseToRemove = document.getElementById("removeName").value;//frontend
    let index = courses.indexOf(courseToRemove);  //1      
    // Find the index of the course to remove
    if (index !== -1) { 
        courses.splice(index, 1); // Remove the course from the array,
        displayCourses(); // Update the displayed list
    }
    else {
        alert("Course not found.");
    }
    // courses.shift(); // Remove the last course from the array
    // displayCourses(); // Update the displayed list

}



//Array

let numbers = [];
let numbers2 = new Array(); // Array of Numbers




//Array of Objects
