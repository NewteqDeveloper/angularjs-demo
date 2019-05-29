var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			//templateUrl: "main.html"
			template: "Nothing"
		})
		.when("/hello", {
			templateUrl: "hello.html"
		})
		.when("/more", {
			templateUrl: "more.html",
		});
});

app.controller("hello", function ($scope) {
	$scope.world = "hello world"
});
app.controller("more", function ($scope) {
	$scope.more = "more";
});