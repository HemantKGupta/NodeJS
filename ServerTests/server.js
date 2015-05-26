var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res)
	{
	res.sendfile("index.html");
	});

app.post('/login', function (req, res)
	{

	//var user_name = req.body.user;
	//var password = req.body.password;
	//console.log("The req body is : "+JSON.stringify(req.body));

	var accountId = req.body.accountId;
	var messageContent = req.body.messageContent;
	var jsonObject = JSON.parse(messageContent);
	console.log("The account id is : "+accountId);
	console.log("The messageContent  is : "+jsonObject);
	console.log("The socialpost is : "+jsonObject["socialpost"]);
	for(var key in jsonObject["socialpost"][0]){
		var attrName = key;
		var attrValue = jsonObject["socialpost"][0][key];
		console.log(attrName);
		console.log(attrValue);
	}

	//console.log("User name = " + user_name + ", password is " + password);
	res.end("done");

	});

app.listen(9000, function ()
{
console.log("Started on PORT 9000");
})