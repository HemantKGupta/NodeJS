var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp');
var source = __filename;
var target = path.join(dir, 'outfile');

fs.mkdir(dir, makedirFunction());

function makedirFunction(err)
	{
	if (err)
		{
		handleError(err);
		}
	else
		{
		fs.readFile(source, havefileFunction);
		}
	}

function havefileFunction(err, filecontent)
	{
	if (err)
		{
		handleError(err);
		}
	else
		{
		fs.writeFile(target, filecontent, writefileFunction);
		}
	}

function writefileFunction(err)
	{
	if (err)
		{
		handleError(err);
		}
	else
		{
		console.log("done");
		}
	}

function handleError(err)
	{
	console.error(err);
	}