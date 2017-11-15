const express = require("express");
const bodyParser = require('body-parser');

const app = express();

var database = require("./in-memory-database")();

database.init([
	"foo", "bar", "baz"
]);

app.get('/', function (req, res){
  // res.send("Yo!");
  res.send(database.readAll());
});

app.post('/', function(req,res) {
	database.create("a new string");
  	res.send(database.readAll());
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Express server is up and running." + port);
});