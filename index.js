var express = require("express");
var app = express();

var database = require("./in-memory-database")();

database.init([
	"foo", "bar", "baz"
]);

app.get('/', function (req, res){
  res.send("Yo!");
  // res.send(database.readAll());
});

app.post('/', function(req,res) {
	//datab	
  	res.send('You posted!');
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Express server is up and running." + port);
});