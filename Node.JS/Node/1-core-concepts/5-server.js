// Web Server or app server

// To use the HTTP server and client one must require('http').

const http=require('http');
const fs=require('fs');


const server=http.createServer(); // webserver => event-emiter

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


/*
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
// open the console with admin privileges and provide following command 
// npm install -g nodemon
// after instalation is completed, then run node server file with nodemon command
// ex: nodemon 5-server.js

//----------------------------------------------------------------------------------
  
*/
/*
server.on('request',(req,res)=>{
  
    console.log('HTTP Request type: '+req.method);
    console.log('HTTP Request URl: '+req.url);

    let httpMethod=req.method;
    let httpUrl=req.url;

    console.log('Hello '+req.name);
    
    /*
    if(httpMethod == 'GET' && httpUrl=='/'){
        console.log('You have sent GET request for /'); 
      //  console.log('hello '+req.query.name);
        
    }

    if(httpMethod == 'POST' && httpUrl=='/'){
        console.log('You have sent POST request for /'); 
    }

    if(httpMethod == 'PUT' && httpUrl=='/'){
        console.log('You have sent PUT request for /'); 
    }

    if(httpMethod == 'DELETE' && httpUrl=='/'){
        console.log('You have sent DELETE request for /'); 
    }
    
   


    res.end();
    
});

 */


 /*
Video gets loaded into a buffer meory (Ram Memory)
   30 MB -> 100 X 30 MB -> ? 


 */

 /*
 // Stream a video file with out chunks
server.on('request',(req,res)=>{
    res.writeHead(200,{'Content-Type':'video/mp4'});
    fs.readFile('./20191004_195205.mp4',(err,data)=>{
        if(err){
            console.log('error occured '+err);
            return;
        }

        res.write(data);
        console.log(data);
        
    })

});

*/

/*
server.on('request',(req,res)=>{

    res.writeHead(200,{'Content-Type':'video/mp4'});
    let readStream=fs.createReadStream('./20191004_195205.mp4');// EventEmitter

    readStream.on('data',(chunk)=>{
        res.write(chunk);
        console.log(chunk);
        
    });

    readStream.on('end',()=>{
        res.end();

    })


})

*/

server.on('request',(request,response)=>{

    const requestUrl=request.url;
    console.log(request.url);
    
    if(requestUrl=='/employees'){
        response.write('Emloyees request is processing')
        response.end();
        return;
    }

    if(requestUrl=='/products'){
        response.write('Product request is processing')
        response.end();
        return;
    }

    if(requestUrl=='/todos'){
        response.write('Todos request is processing')
        response.end();
        return;
    }

    response.write('General Reuqets is processing');
    response.end();

})

