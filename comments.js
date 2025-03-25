// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// The comments.html file should be served as a static file. Use the fs module to read the contents of the file and send it to the client.
// The server should listen on port 3000.

exports.createServer = function() {
  var http = require('http');
  var fs = require('fs');

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./comments.html', function(err, data) {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }).listen(3000);
}
