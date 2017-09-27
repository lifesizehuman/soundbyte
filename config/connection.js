var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "insecure",
  database: "musicartists_db",
  port: 8889
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  console.log("You are connected.");
});

module.exports = connection;
