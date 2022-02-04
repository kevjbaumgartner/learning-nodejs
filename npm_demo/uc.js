var uc = require('upper-case');
var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(uc.upperCase("hello this will be uppercase"));
	res.end();
}).listen(3000);