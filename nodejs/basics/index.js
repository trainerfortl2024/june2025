// console.log('nodejs working')

//Callback based
// const fs = require('fs')

// fs.readdir('.', (err, files) => {
//     if (err) {
//         console.log('error in reading files')
//     }
//     else {
//         console.log(files)
//     }
// })

// //Promises based 
// const fs = require('fs').promises

// fs.readdir('.')
// .then((files) => console.log(files))
// .catch((error) => console.log(error))



// //async/await based 
// const fs = require('fs').promises

// async function readDirAsync() {
//     try {
//         const files = await fs.readdir('.');
//         for (const file of files) {
//             console.log(file)
//         }
//     }
//     catch (err) {
//         console.log("Error : " + err)
//     }
// }
// readDirAsync();


// fs.stat
const fs = require('fs')
fs.stat('./test1', (err, result) => {
    if (err) console.log(err)
    else {
        console.log(result.isFile())
        console.log(result.isDirectory())
    }
})

/*
test1 is a folder
test2 is a folder
index.js is  a file
*/