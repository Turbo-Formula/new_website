var express = require('express');
var app = express();

app.get('/',function(req,res) {
	res.send("Hello, this is a message from god.");
});

app.listen(80);
