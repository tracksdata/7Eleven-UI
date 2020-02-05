console.log('-- server.js');


const express=require('express')
const app=express();
var bodyParser = require('body-parser')
var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
  });

db.connect();

let products=[];






const baseUrl="/api/products";

app.get(baseUrl,(req,res)=>{
    db.query("select * from product",(error,rows)=>{
       console.log(rows);
       products=rows;
       console.log('-------------------');
       console.log(products);
       res.send(products);
       
        // rows.forEach(row=>{
         //   console.dir(row.id);
           // products.push(JSON.stringify(row));
           // res.send(row)
            
        //})
    })
    



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
   
    //db.query("insert into product ? ")
    

    let newProduct=req.body;
    //res.send(newProduct);
    products.push(newProduct);
    res.send(newProduct);

})






app.put(baseUrl,(req,res)=>{
    console.log('put request ');
    let newProduct=req.body;
   
    products=products.map(prod=>{
        if(prod.id===newProduct.id){
            return Object.assign({},newProduct)
        }else
        return prod;
    })

    res.send(products)
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


