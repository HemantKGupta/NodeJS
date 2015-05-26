var  operations = require('./operations');

operations({some:'args'}, function(err, result){

	if(err){
		console.error(err);
	}
	else {
		console.log('successful result', result);
	}
});