var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	var qry = url.parse(req.url, true).query;
	var text = qry.year + ' ' + qry.month + ' ' + qry.day;

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(text);
	res.end();
}).listen(3000);