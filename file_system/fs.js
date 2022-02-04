var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
	// fs.open('demofile.txt', 'w', function (err, file) {
	// 	if (err) throw err;
	// 	console.log('Open done.')
	// });
	// fs.writeFile('demofile.txt', 'Write text.', function (err) {
	// 	if (err) throw err;
	// 	console.log('Write done.');
	// });
	// fs.appendFile('demofile.txt', 'Append text.', function (err) {
	// 	if (err) throw err;
	// 	console.log('Append done.');
	// });

	fs.rename('demofile.txt', 'renamedfile.txt', function (err) {
		if (err) throw err;
		console.log('Rename done.');
	});
	// fs.unlink('demofile.txt', function (err) {
	// 	if (err) throw err;
	// 	console.log('Delete done.');
	// });

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('Done!');
	return res.end();

	// fs.readFile('demofile.html', function (err, data) {
	// 	res.writeHead(200, {'Content-Type': 'text/html'});
	// 	res.write(data);
	// 	return res.end();
	// });
}).listen(3000);