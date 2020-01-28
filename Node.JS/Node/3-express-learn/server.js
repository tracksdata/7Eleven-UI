// express learn

let express=require('express');
let app=express();
let bodyParser=require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

let products=[
    {id:'P001',name:'Pen',price:87},
    {id:'P002',name:'Book',price:837},
    {id:'P003',name:'Laptop',price:187},
    {id:'P004',name:'Mouse',price:8327},
    {id:'P005',name:'Phone',price:827}
];

console.log(products);



app.use(express.static(__dirname+'/public')) // loads only from public

app.get('/api/products',(req,res)=>{
    res.json(products);
})

app.post('/api/products',(req,res)=>{
    console.log(req.body);

  
    products.push(req.body);
  
    console.log(products);
    
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log('server started...');
    
});
