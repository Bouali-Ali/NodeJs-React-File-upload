var express = require('express');
var traitement = require('./traitement');

var app = express();

app.get('/', function (req, res){
    res.send("Home")
});
   

app.post('/upload', function (req, res){

  traitement.traiter(req);
 
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);