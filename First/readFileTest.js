var fs = require('fs');
fs.readFile(__filename, {encoding:'utf8'}, testdata);

function testdata(err, data){
	if(err){
		console.error(err);
	}else {
		console.log(data)
	}
}