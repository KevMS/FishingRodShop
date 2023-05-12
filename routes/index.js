var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/cart', function(req, res, next) {
  res.render('cart');
});

router.get('/product', function(req, res, next) {
  res.render('product');
});
router.get('/shop', function(req, res, next) {
  res.render('shop');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});



module.exports = router;
