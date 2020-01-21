// express application
const express=require('express');
const app=express();


/* app.get('/',(req,res)=>{
    res.send('Hello from express framework')
})

app.get('/products',(req,res)=>{
    res.send('Products get request')
})

app.get('/todos',(req,res)=>{
    res.send(['Eat','Sleep','Play']);
   
})

app.get('/view',(req,res)=>{

    let template=`
    <div>
        <span> Praveen </span>
    </div>
    `
    res.send(template);
})
 */

/* 
 // Redirections

 app.get('/old-path',(req,res)=>{
    // res.send('old path');
    // partial / complete request processing
    res.redirect('http://www.google.com');

 })

 app.get('/new-path',(req,res)=>{
     res.send('Welcomem to new path');
 }) */






let fs=require('fs');

app.get('/',(req,res)=>{
    res.writeHead(200,{'Comtent-Type':'text/html'});
   /*  fs.readFile('./public/index.html',(err,data)=>{
        res.write(data);
        res.end();
    }) */

    // or
   /*  let stream=fs.createReadStream('./public/index.html');
    stream.on('data',(chunk)=>{
        res.write(chunk);
    });
    stream.on('end',()=>{
        res.end();
    }) */

    // or
    fs.createReadStream('./public/index.html').pipe(res);
})

// for css
app.get('/css/bootstrap.min.css',(req,res)=>{
    fs.createReadStream('./public/css/bootstrap.min.css').pipe(res);
})

app.listen(3000,()=>{
    console.log('aserver running on http://localhost:3000');
})


