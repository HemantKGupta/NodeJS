var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Verifier = function(metadata, content) {
	var self = this;

	if(metadata.hasError){
		self.emit('err');
	}else{

		if(conent.source =='Facebook' &&  content.type == 'Personal'){
			self.emit('FBPersonal');
		}
	}
};
util.inherits(Verifier, EventEmitter);

var verifier = new Verifier(meta, data);

verifier.on("err",errorHandler );
verifier.on("FBPersonal",fbPersonalPoster );

