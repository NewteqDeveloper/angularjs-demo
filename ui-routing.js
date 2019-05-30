var app = angular.module("ui-routing", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/hello');

	var helloState = {
		name: 'hello',
		url: '/hello',
		template: '<h3>Hello world!</h3>'
	}

	$stateProvider
			.state(helloState);
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