var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname,'temp');
var  source = __filename;
var target = path.join(dir,'outfile');

fs.mkdir(dir, function(err){
	if(err){
		handleError(err);
	}
	else{
	 	fs.readFile(source, function(err, filecontent){
			if(err){
				handleError(err);
			}
			else{
				//console.log(filecontent);
				fs.writeFile(target, filecontent, function(err){
					if(err){
						handleError(err);
					}
					else{
						console.log("done");
					}
				});
			}
		});
	}
});

function handleError(err){
	console.error(err);
}