const fs = require('fs');

// Create a readable stream from 'input.txt'
const readableStream = fs.createReadStream('input1.txt');

// Create a writable stream to 'output.txt'
const writableStream = fs.createWriteStream('output2.txt');

readableStream.pipe(writableStream);

readableStream.on('end', () => {
    writableStream.end();
    console.log('File copied successfully without pipe.');
});
