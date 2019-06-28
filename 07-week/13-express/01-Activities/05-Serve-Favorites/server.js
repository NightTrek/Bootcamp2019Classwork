// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 4200;



function displaypage(url, req, res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + url, function (err, data) {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function display404(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}



// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;
  console.log(path);
  // Depending on the URL, display a different HTML file.
  switch (path) {

    case "/":
      console.log("display root");
      return displaypage("/index.html", req, res);

    case "/favoritefoods":
        console.log("display food");
      return displaypage("/favFoods.html", req, res);

    case "/favoritemovies":
        console.log("display movies");
      return displaypage("/favmovies.html", req, res);

    case "/favoriteframework":
        console.log("display movies");
      return displaypage("/favframework.html", req, res);

    default:
        console.log("display 404");
      return display404(path, req, res);
  }



}

// Create our server
var server = http.createServer(handleRequest);
// Starts our server
server.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});
