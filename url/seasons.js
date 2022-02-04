var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
	var data = url.parse(req.url, true);
	var fn = "." + data.pathname;

	fs.readFile(fn, function (error, data) {
		if (error) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end('404 not found.');
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return  res.end();
		}
	});
}).listen(3000);