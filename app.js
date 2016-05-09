var http = require('http');
var bird = require('./Module3');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(bird.bigMoney() + bird.crazy());
  res.end();
}).listen(3000);

console.log('listening on port 3000');
