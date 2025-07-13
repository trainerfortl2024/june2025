const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    console.log(req.url)
    if (req.url === '/home')
        res.write('<h1>Welcome to the Home page</h1>')

    else if (req.url === '/node') {
        res.write('Hello <b>Node.js</b>')
    }
    else {
        res.write('loading..')
    }
    res.end();

})
server.listen('4000', () => {
    console.log('server started - http://localhost:4000/')
})