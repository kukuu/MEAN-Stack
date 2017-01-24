//Author: Alexander Adu-Sarkodie
//Date: January 2017
//Application Framework: MEAN-Stack

var express = require('express');

//we create an instantiate of express
var app = express();
var mongojs = require('mongojs');
 var db = ('contactlist',['contactlist'])


//Set up our static assets to be consumed by express
app.use(express.static(__dirname + "/public"));

//make a get request for the data from MongoDB
app.get('/contactlist',function(req,res){
	console.log("I received a GET request")
	db.contactlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});


//Assign our listening port for execution and test
app.listen(3079);
console.log('App running on port 3099');