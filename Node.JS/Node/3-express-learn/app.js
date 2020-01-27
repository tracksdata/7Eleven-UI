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

/*
app.get('/',(req,res)=>{
   // res.writeHead(200,{'Comtent-Type':'text/html'});
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
    }) 

    // or
   // fs.createReadStream('./public/index.html').pipe(res);
   res.sendFile(__dirname+'/public/index.html');
})

// for css
app.get('/css/bootstrap.min.css',(req,res)=>{
    //fs.createReadStream('./public/css/bootstrap.min.css').pipe(res);
    res.sendFile(__dirname+'/public/css/bootstrap.min.css');
})
*/


/* app.use('/test',(req,res,next)=>{
    console.log('step-1'); 
    next();
})

app.use('/test',(req,res,next)=>{
    console.log('step-2'); 
    next();
})

app.use('/test',(req,res,next)=>{
    console.log('step-3'); 
    next();
})

app.use('/test',(req,res,next)=>{
   res.send('Hello test is completed...');
})
 */

 /* 
app.use((req,res,next)=>{
    console.log('Validation');
    next();
})

app.use((req,res,next)=>{
   console.log('Authentication');
   next();
})


 app.use('/cts',(req,res,next)=>{
     //res.send('Hello cts associate!');
     // custom BU logic
     console.log('cts request BU logic is going on..');
     next();
 })


 app.use('/cts',(req,res,next)=>{
    res.send('Hello cts associate!');
   console.log('cts request proccessed.....');
   
})


app.use("/saveProduct",(req,res,next)=>{
    console.log('Data Parsing');
    next();
   //res.send('data parsing issue');
})

app.use("/saveProduct",(req,res)=>{
    // logic to save product to DB
   res.send('Product saved');
   console.log('-- saving product to db is completed...');
   
})


app.get('/products',(req,res,next)=>{
    console.log('-- getting producs step 1'); 
    next();
})

app.get('/products',(req,res,next)=>{
    res.send(['Item-1','Item-2','Item-3','Item-4'])
    console.log('-- loading products completed'); 
})

 */

app.use('/sample',(req,res,next)=>{
    res.send('Will execute for every reqiest');
});



app.get('/data',(req,res)=>{

    res.send('Only with get request');
});

app.put('/data',(req,res)=>{

    res.send('Only with PUT request');
});

app.delete('/data',(error,req,res)=>{
    throw error;
    res.send('Only with Dleete request');

});

app.post('/data',(req,res)=>{

    res.send('Only with POST request');
});


/* app.get('/sample',(req,res)=>{

    res.send('Only with get request');\
}); */


//app.use(express.static("c:/abc"));
app.use(express.static(__dirname+'/public')) // loads only from public
//app.use(express.static(__dirname+'/src')) // only from src
//app.use(express.static(__dirname+'.')) // loads all folder data

//let num=require('c:/abc/test');
/* app.use('/todos/:name',(req,res,next)=>{
    if(req.params.name.length<=3){
        res.send('User name must have grater than 3 letters');
        return;
    }
    next();
})

app.use('/todos/:name',(req,res,next)=>{
    res.send('Your name is validated.. '+req.params.name)
}) */
/* 
app.get('/todos',(req,res)=>{
    res.send('Uuser namme must be provied...');
})
app.get('/todos/:userName',(req,res)=>{
    let user=req.params.userName;
    if(user.length<=3){
        console.log('Invalid user name');
        res.send('Invalid user name')
        return;
    }
    res.send('hello dear user '+user)
    console.log('Usrr name is '+user);
}) */


app.use('/products',(req,res,next)=>{
    console.log('Validation');
    next(); 
})

app.use('/products',(req,res,next)=>{
    let user='admin123';
    if(user!='admin' || user==null || user==undefined){
       throw Error('My Own Error message')// throw clause means eoor handled...
        //return false;
    }
   
    console.log('Authentication successfull');

    //res.send(403,'Authentication error problem');
    //return false;
    next(); 
})


app.use('/products',(req,res,next)=>{
    console.log('Data-Parsing ');
    next(); 
})



app.use("/products",(req,res,next)=>{
    res.send(['Item-1','Item-2','Item-3']);
})






app.listen(3000,()=>{
    console.log('aserver running on http://localhost:3000');
})




