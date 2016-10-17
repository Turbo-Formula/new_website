var express = require('express');
var app = express();

app.get('/',function(req,res) {
	res.send("Hello, this proves that Jenkin's is building directly to the web!");
});

app.listen(80);
