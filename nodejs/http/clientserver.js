const http = require('http');

const options = {
    hostname: 'www.google.com',
    path: '/',
    method: 'GET'
}
const client = http.request(options, (res) => {

    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    })

    res.on('end', () => {

        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
        server.listen('4000', () => {
            console.log('server started')
        })

    })

 client.on('error', (e) => {
        console.error('problem with request ' + e.message())
    })

})

client.end();
