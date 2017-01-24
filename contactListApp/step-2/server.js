//Author: Alexander Adu-Sarkodie
//Date: January 2017
//Application Framework: MEAN-Stack

var express = require('express');

//we create an instantiate of express
var app = express();


//Set up our static assets to be consumed by express
app.use(express.static(__dirname + "/public"));


//Assign our listening port for execution and test
app.listen(3099);
console.log('App running on port 3099');