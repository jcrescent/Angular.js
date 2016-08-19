var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
$routeProvider
	.when('/edit/:id', {
		templateUrl: 'partials/edit.html',
	controller: 'editPageController'
	})
	// .when('/show/:id', {
	// 	templateUrl: 'partials/edit.html',
	// controller: 'editPageController'
	// })
	.when('/new', {
		templateUrl: 'partials/new.html',
	controller: 'newPageController'	
	})
	.when('/', {
		templateUrl: 'partials/main.html',
	controller: 'indexController'
	})
	.otherwise({
		redirectTo: '/',
	})
});