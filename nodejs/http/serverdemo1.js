const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('Hello <b>Node.js</b>')

})
server.listen('4000', ()=>{
    console.log('server started - http://localhost:4000')
})