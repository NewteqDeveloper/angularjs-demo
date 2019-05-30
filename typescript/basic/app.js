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
app.controller("hello", function ($scope) {
    $scope.world = "hello world";
});
app.controller("more", function ($scope) {
    $scope.more = "more";
});
