var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express();
var port = process.env.PORT || 9099
app.use(express.static(__dirname + '/'));



app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

// app.listen(9099,function(){ console.log("server listening on 9099")});

app.listen(port, function() {
    console.log("App is running on port " + port);
});