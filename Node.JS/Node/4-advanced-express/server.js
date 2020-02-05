console.log('-- server.js');


const express=require('express')
const app=express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
  });

db.connect();



const baseUrl="/api/products";
const userUrl1="/api/operations/login";
const userUrl2="/api/operations/cart";
const userUrl="/api/operations/filter";
app.get(baseUrl,(req,res)=>{

    db.query("select * from product",(error,rows)=>{
      
       res.send(rows);
       
      
    })
    
})

app.get(baseUrl+"/:pid",(req,res)=>{
  let pid=req.params.pid;
  db.query("select * from product where id='"+pid+"'",(error,result)=>{
      if(error){
          return "SQL Query error "+error
      }
      console.log(result);
      
      if(result.length===0){
        res.send("Product Id with "+pid+" does not found in database");
        return;
          
      }
      res.send(result);
  });

})



app.get(baseUrl+'/byName/:pname',(req,res)=>{

    let pn=req.params.pname;
    //console.log(pn);
    

    db.query("select * from product where name like '%"+pn+"%'",(error,rows)=>{
        if(error){
            console.log('isse with '+error);
            return
        }
        if(rows.length!==0){
            res.send(rows);
            return;
        }
       
        else
        res.send("No Record matching with Given criteria");
    })


  // let something=products.filter(prod=>prod.name.match(pn));
   //let filterProducts=products.filter(prod=>prod.name===pn);
  
})


app.post(baseUrl,(req,res)=>{
   
    let newProduct=req.body;
    console.log(newProduct);
    
   db.query("insert into product set ? ",newProduct,(error,result)=>{
       if(error){
           console.log('Error while Posting data to DB');
           return;
       }
       res.send(newProduct);
   })
    

    
    //res.send(newProduct);
  //  products.push(newProduct);
   // res.send(newProduct);

})






app.put(baseUrl,(req,res)=>{
    console.log('put request ');
    let newProduct=req.body;
   

    db.query(`update product set name='${newProduct.name}',price=${newProduct.price} where id='${newProduct.id}'`,(error,result)=>{
        if(error){
            console.log("isseu while updating  "+error);
            return
        }
        res.send(newProduct);
    })


 /*    products=products.map(prod=>{
        if(prod.id===newProduct.id){
            return Object.assign({},newProduct)
        }else
        return prod;
    })

    res.send(products) */
})

app.delete(baseUrl+'/:id',(req,res)=>{
    let pid=req.params.id;
    //console.log(pid);
    


    db.query("delete from product where id='"+pid+"'",(error,result)=>{
        if(error){
            console.log('issue with '+error);
            return;
        }
        res.send('Product Id '+pid+" deleted");
    })
  

   // products=products.filter(prod=>prod.id!==pid);

    
    
})





app.listen(3000,()=>{
    console.log('server stated on http://localhost:3000');
    
})


