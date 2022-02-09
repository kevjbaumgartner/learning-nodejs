var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost", 		// redacted
	user: "root",			// redacted
	password: "notroot",	// redacted
	database: "demodb"		// redacted
});

// var str = "CREATE DATABASE demodb";
// var str = "CREATE TABLE demotable (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), val VARCHAR(255))"
// var str = "INSERT INTO demotable (name, val) VALUES ?";
// var insertValues = [
// 	['nameA', 'valA'],
// 	['nameB', 'valB'],
// 	['nameC', 'valC']
// ];
var str = "SELECT * FROM demotable";

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected");
	con.query(str, function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
	con.end();
});