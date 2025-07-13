const fs = require('fs');

// Create a writable stream to write data to 'output.txt'
const writableStream = fs.createWriteStream('output.txt');

// Write data to the stream
writableStream.write('Node.js stream demo!\n');
writableStream.write('This is a writable stream.\n');

// End the stream
writableStream.end();

writableStream.on('finish', () => {
    console.log('Writing completed.');
});
