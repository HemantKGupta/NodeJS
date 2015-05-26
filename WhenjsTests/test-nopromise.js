var fs = require('fs');

function readJSON(filename, callback){
	fs.readFile(filename, 'utf8', function (err, res){

		if (err) return callback(err);

		callback(null, JSON.parse(res));

	});
}

readJSON('fbresponsemap.json', function(err, data){
	if(err){
		console.log("The err is "+ err);
	} else {
		console.log("The data is : "+JSON.stringify(data));
	}
});