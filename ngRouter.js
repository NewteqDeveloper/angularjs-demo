var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "templates/main.html"
		})
		.when("/hello", {
			templateUrl: "templates/hello.html"
		})
		.when("/more", {
			templateUrl: "templates/more.html",
		});
});

app.controller("hello", function ($scope, generator) {
	$scope.world = "hello world and also ---"
	generator.gen().forEach(element => {
		$scope.world += ` ${element}`;
	});
});
app.controller("more", function ($scope) {
	$scope.more = "more";
});

app.service('generator', function() {
  this.gen = function (x) {
    return [
			"Mark",
			"Nick",
			"Dane",
			"Dave",
		]
  }
});

app.directive("testComponent", function() {
	return {
		templateUrl: 'templates/controllers/test.html',
		restrict: "E"
	}
});

app.filter("makeBig", function() {
	return function(x) {
		return x.toUpperCase();
	};
});