//console.log("Ruchika is great");
//Import express
var express = require('express');

//Create aapliction

var app = express();

//Define a function to run when someone accesses our site
app.get('/',function(req,res){
    res.send('Hello world');
})
//Run application on a port
var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Site running on http://localhost:"+port);
});