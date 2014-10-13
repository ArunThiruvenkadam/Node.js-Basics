var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Welcome to Node.js\n');
}).listen(8000);

console.log("Server running");
