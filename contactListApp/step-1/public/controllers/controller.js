//Author: Alexander Adu-Sarkodie
//Date: January 2017
// Controller glues the model to the view interchanging  and ensuring that the model updates the view

var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log("Hello World from Controller");
}])
