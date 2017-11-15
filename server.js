const express = require("express");
const bodyParser = require('body-parser');

const app = express();

// Serve files from client/dist folder. That's where all of our HTML, CSS, and JS
// from the React client app end up.
// This line is used when the React project has been built and rendered as HTML/CSS/JS.
// app.use(express.static('client/build'));

// This allows us to accept JSON bodies in POSTs and PUTs.
app.use(bodyParser.json());

var errorCallback = console.error.bind(console);

// Temporary in-memory database to store shopping list items.
var shoppingListDb = require("./in-memory-database")();

shoppingListDb.init([

	// { name: "fake item", price: 42 },
	// { name: "some other thing", price: 33 }

]);

// GET /api/itemlist - responds with an array of all items in the database.

app.get('/api/itemlist', function (req, res){
	// res.send("stuff");
  	res.send(shoppingListDb.readAll());
});

// POST /api/itemlist - adds a shipping list item to the database. The item name and price
// are available as JSON from the request body.
app.post('/api/itemlist', function(req, res) {
    var item = req.body;
    shoppingListDb.create(item);
    res.send("SUCCESS");
});

// PUT and DELETE are both actions we would like to add here but we will start with just GET and POST and see where things lead.

var port = process.env.PORT || 4000;
// Start the server!
app.listen(port, function () {
  	console.log('JSON Server is running on ' + port);
});