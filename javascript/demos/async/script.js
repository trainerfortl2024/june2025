//Callback
// console.log("start");
// setTimeout( () => {
// console.log("task completed")
// },2000)
// console.log("end")

//Promises
console.log("start");
let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve('task completed')
    }, 2000)
})
mypromise
.then(message => console.log(message) )
.catch( error => console.log(error))
console.log("end")


// Async/await
// console.log("start");

// async function myasyncfunction() {
//     let message = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('task completed')
//         }, 2000)
//     })
//     console.log(message)
// }

// myasyncfunction();
// myasyc2();
//myasync3();

// console.log("end")


