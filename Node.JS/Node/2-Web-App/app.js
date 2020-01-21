// web app ==> server + requst processing logic

const http=require('http');
let server=http.createServer();


server.on('request',(req,res)=>{
    res.writeHeader(200,{'Content-Type':'text/plain'});
   /*  res.write('Hello');
    res.end(); */

    let url=req.url;
    let httpMethod=req.method;

    if(url==='/' && httpMethod==='GET'){
        res.write('GET Request');
    }

    if(url==='/' && httpMethod==='POST'){
        res.write('POST Request');
    }

    if(url==='/' && httpMethod==='DELETE'){
        res.write('DELETE Request');
    }

    if(url==='/' && httpMethod==='PUT'){
        res.write('PUT Request');
    }

    if(url==='/todos' && httpMethod==='GET'){
        res.write('GET Request for '+req.url);
    }

    res.end();

})



server.listen(3000,()=>{
    console.log('server running at http://localhost:3000');
    
})