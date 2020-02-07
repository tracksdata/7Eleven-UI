const express=require('express')
const app=express();
const mysql = require('mysql')
const MongoClient = require('mongodb').MongoClient
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
})

db.connect()

app.get("/",(req,res)=>{
   
   db.query('select * from employee',(error,rows)=>{
       if(error){
           console.log('isse with '+error);
           return;
       }
       res.send(rows)
       console.log(rows);
       
   })     
  

})

app.listen(3000,()=>{
    console.log('server started...');
    
})