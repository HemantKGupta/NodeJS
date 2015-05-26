var Twit = require('twit');

var T = new Twit({
	consumer_key:         '',
	consumer_secret:      '',
	access_token:         '',
	access_token_secret:  ''
});

T.post('statuses/update', { status: 'A post!' }, function(err, data, response) {
	console.log("The error is "+ err);
	console.log("The data is "+ JSON.stringify(data));
	console.log("The response code is " + response.statusCode);
	console.log("The response headers are " + JSON.stringify(response.headers));
});