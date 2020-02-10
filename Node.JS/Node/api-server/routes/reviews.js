var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Reviews');
});

router.get('/:id', function(req, res, next) {
  res.send('Reviews for '+req.params.id);
});


module.exports = router;
