const http = require('http')
const cluster= require('cluster')

if (cluster.isMaster) {
    console.log(`master process with ${process.pid} is running`)
    cluster.fork()
    cluster.fork()
}
else {
    console.log(`worker process ${process.pid} is started`)
    http.createServer((req, res) => {
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type' : 'text/plain'})
            res.end('home page')
        }
        else if (req.url === '/slow') {
            for (let i = 0; i < 6000000000; i++) { }
            res.writeHead(200, {'Content-Type' : 'text/plain'})
            res.end('slow page')
        }
    }).listen(3001, () => console.log('server is running'))
}