// Web Server or app server

// To use the HTTP server and client one must require('http').

const myProtocal=require('http');
const fs=require('fs');


const server=myProtocal.createServer(); // webserver => event-emiter

// every server must run on a port number.

// following function execiuted autometecally when the server.js file is compiled
server.listen(3000,()=>{
        console.log('server running at http://localhost:3000');
    })



/* 
MIME Types
--------------
text/plain
text/html
application/pdf
video/mp4
....


*/

//--------------------------------------------------------------------

/* // following function executed only when a client send request 
server.on('request',(request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>My First Server Code using Node.JS</h1>');
    response.end();
}) */

// making response type as 'pdf'
server.on('request',(req,res)=>{
    res.writeHead(200,{'Content-Type':'application/pdf'});
   

   // Blockimg IO
   // let pdfFile=fs.readFileSync('./node-js.pdf');
    //res.write(pdfFile);  
    
    // Non blockinh IO

   fs.readFile('./node-js.pdf',(err,data)=>{
        res.write(data);
        res.end();
    })
    console.log('Ready for next request....');
})




//---------------------------------------------------------------------------------

// Nodemon instalation procedure

// Visit https://nodemon.io/
// open ythe console 2ith admin privileges and provide following command 
// npm install -g nodemon
// after instalation is completed, then run node server file with nodemon command
// ex: nodemon 5-server.js

//----------------------------------------------------------------------------------
  






