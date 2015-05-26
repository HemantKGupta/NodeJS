var winston = require('winston');

function getLogger()
	{
	return new winston.Logger({
		transports: [
			new winston.transports.File({
				level: 'info',
				filename: 'socialService.log',
				handleExceptions: true,
				json: false,
				maxsize: 500000,
				maxFiles: 10,
				colorize: false,
				timestamp: getTimeStamp
			})
		],
		exitOnError: false
	});

	}

function getTimeStamp(){
	now = new Date();
	timestamp = "[" + now.getDate() + "-" + (now.getMonth()+1) + "-" + now.getFullYear()
	+ " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "::" + now.getMilliseconds() + "]";
	return timestamp;
}

module.exports = {
	logger : getLogger()
}