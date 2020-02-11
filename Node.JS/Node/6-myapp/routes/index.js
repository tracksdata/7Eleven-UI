var express = require('express');
var router = express.Router();

let products=[
  {'id':"10"},
  {'id':"11"},
  {'id':"12"},
  {'id':"13"},
  {'id':"14"}
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Express APP' });
});

router.get("/s1",(req,res)=>{
  res.send("Hello")
})

module.exports = router;
