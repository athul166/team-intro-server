var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', function(req,res){
    console.log("request submitted");
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
