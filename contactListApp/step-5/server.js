//Author: Alexander Adu-Sarkodie
//Date: January 2017
//Application Framework: MEAN-Stack

var express = require('express');

//we create an instantiate of express
var app = express();
var mongojs = require('mongojs');
var db = ('contactlist',['contactlist']);
var bodyParser = require('body-parser');

//Set up our static assets to be consumed by express including middlewares
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//make a get request for the data from MongoDB
app.get('/contactlist',function(req,res){
	console.log("I received a GET request")
	db.contactlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

//posting data from the body to the DB
app.post('/contactlist',function(req,res){
	console.log(req.body);
	db.contactlist.insert(req.body,function(err,doc){
		res.json(doc);
	})
});

app.delete('/contactlist:id',function(req,res){
	//store  id instance
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id:mongojs.Object(id)},function(err,doc){
		res.json(doc);
	})
});

app.get('',function(err,doc){
	db.contactlist.finOne({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.put('/contactlist/:id',function(req,res){
	var id = req.params.id;
	console.log(req.params.name);
	//findAndModify keys:(query,update,new), callback function
	db.contactlist.findAndModify(
		{ 
			query: {_id: mongojs.ObjectId(id)},
			update: {$set: {name:req.body.name, email:req.body.email, number: req.body.number}},
			new:true
		},
		function(err,doc){
					res.json(doc);
		}
	);
});

//Assign our listening port for execution and test
app.listen(3079);
console.log('App running on port 3079');