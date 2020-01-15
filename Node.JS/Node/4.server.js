const http = require('http');


const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello from server');

    console.log(req.url);
    console.log(req.method);
    
     if(req.url=='/' && req.method=='GET'){
        res.write('GET Request for root')
     }

     if(req.url=='/products' && req.method=='GET'){
        res.write('GET Request for Products')
     }
    
    res.end();
})

server.listen(3000, () => {
    console.log('server is running on http://localhost:3000');
})

