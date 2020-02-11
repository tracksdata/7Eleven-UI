var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test5'
})

db.connect()


/* GET orders listing. */
router.get('/', function(req, res, next) {
  db.query("select * from orders",(error,result)=>{
    if(error)
    throw error;
    res.json(result);
  })
  //res.send('Orders');
});

router.get("/:user_id",(req,res)=>{
  let userId=req.params.user_id;
 
  const ordersQuery=`select cust.user_id,cust.customer_name,cust.email_address,cust.mobile_number,commu.address_id,commu.addr_line1,commu.addr_line2,commu.city,commu.state,commu.pincode from customer cust left outer join
  delivery_address da 
  on cust.user_id=da.user_id left outer join communication commu on 
  da.address_id=commu.address_id where cust.user_id='${userId}'`;

  db.query(ordersQuery,(error,result)=>{
    if(error)
    throw error
    res.json(result);
  })

})


// add an order to a specified user

router.post("/:user_id",(req,res)=>{
  let order=req.body;
  order.user_id=req.params.user_id;
  console.log(order);
  
  const qry="insert into orders SET ?"
  
  db.query(qry,order,(error,result)=>{
    if(error)
    throw error
    res.send(result);
  })



})




module.exports = router;
