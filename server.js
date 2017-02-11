var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(compression());
app.use(express.static(path.join('./build/')));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(process.env.PORT || 3002, function(){
  console.log('server started');
});
