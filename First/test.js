var express = require('express');
var app = express();

var port = 9000;
app.use('/test', function (req, res)
{
console.log("The request param abc is " + req.param("abc"));
console.log("Serving the request");
res.send('Howdy World');
});

app.listen(port);

console.log('Server running at http://localhost:' + port);