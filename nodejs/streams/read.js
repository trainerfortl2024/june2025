
// Create a readable stream to read data from 'input.txt'
const fs = require('fs');

// Create a readable stream to read data from 'input.txt'
const readableStream = fs.createReadStream('output.txt', { encoding: 'utf8' });

readableStream.on('readable', () => {
    const data = readableStream.read(); // Read the chunk of data

    if (!data) {
        return; // No data available, exit the function
    }
    
    console.log(`${data}`); // Log the chunk of data if available
});

readableStream.on('end', () => {
    console.log('File reading completed.');
});
