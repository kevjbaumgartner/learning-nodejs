var http = require('http');
var url = require('url');

var addr = 'http://localhost:3000/default.htm?year=2022&month=february';
var qry = url.parse(addr, true);

console.log(qry.host + ' ' + qry.pathname + ' ' + qry.search + ' ' + qry.query.year + ', ' + qry.query.month);