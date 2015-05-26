var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp');
var source = __filename;
var target = path.join(dir, 'outfile');

fs.mkdir(dir, handlingError(makedirFunction));

function makedirFunction(err)
	{

		fs.readFile(source, handlingError(havefileFunction));

	}

function havefileFunction(err, filecontent)
	{

		fs.writeFile(target, filecontent, handlingError(writefileFunction));
	}

function writefileFunction(err)
	{

		console.log("done");
	}

function handlingError(cb){

	return function(err, result){

		if(err){
			handleError(err);
		}
		else{
			cb(result);
		}
	}
}

function handleError(err)
	{
	console.error(err);
	}