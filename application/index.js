// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

console.log('start')

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  console.log(data)
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end(JSON.stringify(data));
});

// Listen on port `process.env.PORT` or `1138`, IP defaults to `127.0.0.1`
server.listen((process.env.PORT || 1138));

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + (process.env.PORT || 1138) + "/");