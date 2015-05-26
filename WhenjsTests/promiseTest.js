var Promise = require('promise');
var promise = new Promise(function(resolve, reject) {

	console.log("do async work here");
	var x = 1;

	if (x==1) {
		resolve("Stuff worked!");
	}
	else {
		reject(Error("It broke"));
	}
});


promise.then(function(result) {
				console.log(result); // "Stuff worked!"
			}, function(err) {
				console.log(err); // Error: "It broke"
			}
);