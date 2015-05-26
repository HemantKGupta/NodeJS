var when = require('when');

when.reduce(when.map(getRemoteNumberList(), times10), sum)
		.done(function(result) {
		console.log(result);
		});

function getRemoteNumberList() {
	// Get a remote array [1, 2, 3, 4, 5]
	var ar = [1, 2, 3, 4, 5];
	return ar;
}

function sum(x, y) { return x + y; }
function times10(x) {return x * 10; }

function delay(secs) {
	var d = when.defer();
	setTimeout(function () {
	d.resolve(secs);
	}, secs * 1000);
	return d.promise;
}

var promises = [
	delay(5),
	delay(10),
	delay(1)
];

when.all(promises).then(function(value) {
	// invoked after 10 seconds
	console.log('all delays resolved: ', value);  // 'all delays resolved: [5, 10, 1]'
});

when.any(promises).then(function(value) {
	// invoked after 1 second
	console.log('any delay resolved: ', value);  // 'any delay resolved: 1'
});