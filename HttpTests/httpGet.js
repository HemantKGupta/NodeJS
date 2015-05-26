var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var concat = require('concat-stream');

var cookie = 'uc=1a';
http.get({
			host: 'localhost',
			path: '/httptest',
			headers: {'Cookie': cookie}
		},
		function (res)
		{

		res.pipe(concat(function (body)
		{
		console.log("The response is : " + body);
		}));

		}).on('error', function (err)
		{
		// handle errors with the request itself
		console.error('Error with the request:', err.message);
		}
);

