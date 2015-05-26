var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var concat = require('concat-stream');
var https = require('https');
var querystring = require('querystring');

var post_data = querystring.stringify({
	'message' : 'msdmvsdlvmvldv!'
});

var options = {
	host: 'graph.facebook.com',
	port: 443,
	path: '/v2.2/me'+'/feed?access_token='+'aa',
	method: 'POST'
};


var req = https.request(options, function(res) {

	console.log("statusCode: ", res.statusCode);
	console.log("headers: ", res.headers);

	res.on('data', function(d) {
		console.log("The response is : "+ d)
	});
});

req.write(post_data);
req.end();