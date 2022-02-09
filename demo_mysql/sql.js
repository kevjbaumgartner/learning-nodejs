var mysql = require('mysql');

var con = mysql.createConnection({
	host: "", //redacted
	user: "", //redacted
	password: "" //redacted
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected");
});