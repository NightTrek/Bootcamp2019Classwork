var express = require("express");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    {name: 'garlic', price: 7, awesomeness: 2},
    {name: 'neopolitin', price: 4, awesomeness: 2},
    {name: 'half baked', price: 5, awesomeness: 2},
    {name: 'coffee', price: 5, awesomeness: 2},
  ];

app.get("/", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  res.render("icecream", {icecreams});
  
});//

app.get("/icecream/:name", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
  let handlebarObject = icecreams.find(icecreams => icecreams.name == req.params.name)
  res.render("index", handlebarObject);
  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.

});



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
