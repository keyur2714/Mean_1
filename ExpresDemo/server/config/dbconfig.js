var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "mean_app"
});

let getDB = () => {
    return con;
}

module.exports = {
    getDB: getDB
}