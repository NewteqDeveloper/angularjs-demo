var app = angular.module("ui-routing", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');

	var homeState = {
		name: 'home',
		url: '/',
		template: 'HOME'
	}

	var helloState = {
		name: 'hello',
		url: '/hello',
		template: '<h3>Hello world!</h3>'
	}

	var moreState = {
		name: 'more',
		url: '/more',
		template: '<h3>More....</h3>'
	}

	$stateProvider
		.state(homeState)
		.state(helloState)
		.state(moreState);

	// $locationProvider.html5Mode(true); //removes hash only if we are on index.html base
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

app.service('generator', function () {
	this.gen = function (x) {
		return [
			"Mark",
			"Nick",
			"Dane",
			"Dave",
		]
	}
});

app.directive("testComponent", function () {
	return {
		templateUrl: 'templates/controllers/test.html',
		restrict: "E"
	}
});

app.filter("makeBig", function () {
	return function (x) {
		return x.toUpperCase();
	};
});