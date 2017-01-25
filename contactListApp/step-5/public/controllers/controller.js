//Author: Alexander Adu-Sarkodie
//Date: January 2017
// Controller glues the model to the view interchanging  and ensuring that the model updates the view

var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	//console.log("Hello World from Controller");
	
	//Time to make a get request from the server. sending the data from the server to the controller
	//the route to the api /contactlist
	//we wrap http.get in a refresh function to dynamically refresh the page when add contact button adds a new  a new contact
	var refresh = function(){
		$http.get('/contactlist').
		then(function(response){
			$scope.contactlist = response;
			$scope.contact = '';
			console.log(response);
		},function(response){
			//some error
			console.log(response);
		});
	}

	//Call refresj
	refresh();

	//todo: Modify success with then: see above
	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist',$scope.contact).
		success(function(response){
			console.log(response);
			//empties any redundant data and refreshes with update/request
			refresh();
		});	
	}

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(response){
			//empties any redundant data and refreshes with update/request
			refresh();
		});
	}

	$scope.edit = function(id){
		console.log(id);
		http.get('/contactlist/' + id).success(function(response){
			$scope.contact = response;
		})
	}

}])
