//Author: Alexander Adu-Sarkodie
//Date: January 2017
// Controller glues the model to the view interchanging  and ensuring that the model updates the view

var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	//console.log("Hello World from Controller");
	
	//Time to make a get request from the server. sending the data from the server to the controller
	//the route to the api /contactlist
	$http.get('/contactlist').
	then(function(response){
		$scope.contactlist = response;
		console.log(response);
	},function(response){
		//some error
		console.log(response);
	})	
}])
