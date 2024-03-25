const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost", 
  port: 3306, 
  user: "root",
  password: "Nikhil@4123",
  database: "FoodApp",
});

module.exports = db;
