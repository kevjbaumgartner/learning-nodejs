// Node modules
const express = require('express');
const url = require('url');
const mysql = require('mysql2');
const path = require('path');

// Declarations
const app = express();
const con = mysql.createConnection({
	host: "localhost", 		// redacted
	user: "root",			// redacted
	password: "notroot",	// redacted
	database: "demodb"		// redacted
});

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
})

app.listen(3000, () => {
	console.log("server up at port 8080");
});