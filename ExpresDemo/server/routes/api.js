const express = require('express');
const router = express.Router();

const dbConfig = require('../config/dbconfig');
//var mysql = require('mysql');

//  var conn = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "admin",
//    database: "mean_app"
//  });


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Hello Radhe Krishna…');
});

/* GET api listing. */
router.get('/sayHello/:name/:id', (req, res) => {  
  res.send('Hello '+ req.params.name +' Good Morning…'+req.params.id);
});

/* GET api Query Parameter Example. */
router.get('/showFriends', (req, res) => {
  let firstName =  req.query.firstName == undefined ? 'keyur' : req.query.firstName;
  let lastName =  req.query.lastName == undefined ? 'thakor' : req.query.lastName; 
  res.send('Hello '+ firstName + ' ' + lastName);
});


/* POST api with parameters. */
router.post('/products', (req, res) => {
  console.log(req.body);
  let product = req.body;
  console.log(product.code);
  var sql = "INSERT INTO product_details (code, description, price) VALUES ('"+product.code+"','"+ product.description +"',"+product.price+")";
  dbConfig.getDB().query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });  
});

/* PUT api with parameters. */
router.put('/products/:id', (req, res) => {
  console.log(req.body);
  let productId = parseInt(req.params.id);
  let product = req.body;
  console.log(product.code);
  var sql = "update product_details set code = '"+product.code+"',description='"+product.description+"',price="+product.price+" where product_id="+productId;
  dbConfig.getDB().query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });  
});

router.get('/products', (req,res) => {  
    dbConfig.getDB().query("SELECT * FROM product_details", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });  
});

router.get('/products/:id', (req,res) => {  
  let productId = req.params.id;
  dbConfig.getDB().query("SELECT * FROM product_details where product_id = "+productId, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });  
});

router.delete('/products/:id', (req,res) => {  
  let productId = req.params.id;
  dbConfig.getDB().query("delete FROM product_details where product_id = "+productId, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });  
});

module.exports = router;

