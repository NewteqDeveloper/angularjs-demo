var app = angular.module("myApp", ["ngRoute"]);
app.controller("hello", function($scope) {
	$scope.app = "hello world"
});
app.controller("more", function($scope){
	$scope.app = "more";
});