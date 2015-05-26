var when = require('when');

function sayHello() {

	var d = when.defer();

	setTimeout(function () {
		d.reject("I'm busy");
	}, 5000);

	return d.promise;
}

sayHello().then(
		function (greeting) {
		// never invoked
		},
		function (err) {
		// five seconds later
		console.log(err);  // "I'm busy"
		}
);