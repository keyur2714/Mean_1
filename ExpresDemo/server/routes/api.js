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


/* POSTT api with parameters. */
router.post('/product', (req, res) => {
  console.log(req.body);
  let product = req.body;
  res.send('Hello '+ product.description);
});

router.get('/products', (req,res) => {  
  
  dbConfig.getDB().connect(function(err) {
    if (err) throw err;
    console.log("Db Connected...");
    dbConfig.getDB().query("SELECT * FROM product_details", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

module.exports = router;

