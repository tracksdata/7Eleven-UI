var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*  mongoose.connect('mongodb://localhost/test4', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

console.log(BlogPost); */



  res.render('index', { title: 'Express' });
});

module.exports = router;
