var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', function(req,res){
    console.log("request submitted");
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8181, function(){
    console.log("server is running on 8181");
});