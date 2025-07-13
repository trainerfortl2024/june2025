const fs = require('fs');

// Create a readable stream from 'input.txt'
const readableStream = fs.createReadStream('input1.txt');

// Create a writable stream to 'output.txt'
const writableStream = fs.createWriteStream('output1.txt');

// Manually copy data from readable to writable
readableStream.on('data', (chunk) => {
    writableStream.write(chunk);
});

readableStream.on('end', () => {
    writableStream.end();
    console.log('File copied successfully without pipe.');
});
