console.log('-- server.js');

const express=require('express')
const app=express();
var bodyParser = require('body-parser')
let products=[
    {"id":"P001","name":"Pen","price":344},
    {"id":"P002","name":"Gun","price":544},
    {"id":"P003","name":"Mobile","price":38744},
    {"id":"P004","name":"Laptop","price":545},
    {"id":"P005","name":"Mouse","price":464},
];

const baseUrl="/api/products";

app.get(baseUrl,(req,res)=>{


res.send(products);

})

app.get(baseUrl+'/:pname',(req,res)=>{

    let pn=req.params.pname;
    console.log(pn);
    
   let something=products.filter(prod=>prod.name.match(pn));
   let filterProducts=products.filter(prod=>prod.name===pn);
    res.send(something);
})

app.use(bodyParser.json())

app.post(baseUrl,(req,res)=>{
   
    let newProduct=req.body;
    //res.send(newProduct);
    products.push(newProduct);
    res.send(newProduct);

})






app.put(baseUrl,(req,res)=>{
    console.log('put request');
    res.send('put req')
})

app.delete(baseUrl+'/:id',(req,res)=>{
    let pid=req.params.id;
    console.log(pid);
    
  
    products=products.filter(prod=>prod.id!==pid);

    res.send(products);
    
})





app.listen(3000,()=>{
    console.log('server stated on http://localhost:3000');
    
})


