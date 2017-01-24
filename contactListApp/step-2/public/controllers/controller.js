//Author: Alexander Adu-Sarkodie
//Date: January 2017
// Controller glues the model to the view interchanging  and ensuring that the model updates the view

var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	//console.log("Hello World from Controller");
	//We create some mock data to populate the application.
	//This data will be migrated to the server and then to mongoDB database

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
	$scope.contactlist = contactlist;

}])
