//Author: Alexander Adu-Sarkodie
//Date: January 2017
//Application Framework: MEAN-Stack

var express = require('express');

//we create an instantiate of express
var app = express();


//Set up our static assets to be consumed by express
app.use(express.static(__dirname + "/public"));

//make a get request for the data
app.get('/contactlist',function(req,res){
	console.log("I received a GET request")

	person1 = {
		name: "Jim",
		email: "jim@email.com", 
		number: "(223)-41349"
	};

	person2 = {
		name: "Tom",
		email: "tomm@email.com", 
		number: "(007)-78654"
	};

	person3 = {
		name: "Pete",
		email: "pete@email.com", 
		number: "(1109)-2340"
	};

	//we create an array to aggregate all the entries
	var contactlist = [person1,person2,person3];

	//The server responds to the GET request and sends back a JSON formated data to tht controller
	res.json(contactlist);

});


//Assign our listening port for execution and test
app.listen(3089);
console.log('App running on port 3099');