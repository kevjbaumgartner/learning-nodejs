// var fs = require('fs');
// var file = './demofile.txt'
// var readStream = fs.createReadStream(file);

// readStream.on('open', function () {
// 	console.log(file + " was opened.")
// });

var events = require('events');

var eventEmitter = new events.EventEmitter();
var handleEvent = function () {
	console.log("Event!");
};

eventEmitter.on('event', handleEvent);
eventEmitter.emit('event');