//my main file

var express = require('express');
var app = express();

app.get('/', function(req,res)
{	
	var o = {
		message : 'Hello from node (JSON)'
	};
	res.type('application/json');
	var jsonString = JSON.stringify(o);
	res.send(jsonString);
});

app.get('/index.html', function(req,res) 
{	
	res.type('png');
	res.send("<html><body><h3>Hello!</h3></body></html>");
});

app.listen(3000, function()
{
	console.log('example app listening to port 3000');
});