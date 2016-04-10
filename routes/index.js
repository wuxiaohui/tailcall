var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '捕兽夹' });
});
router.get('/login', function (req, res, next) {
    console.log('user');
    res.render('login');
});

module.exports = router;
