var express = require('express');
var router = express.Router();

let products=[
  {'id':"10"},
  {'id':"11"},
  {'id':"12"},
  {'id':"13"},
  {'id':"14"}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
