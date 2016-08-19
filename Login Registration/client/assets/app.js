var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
$routeProvider

.when('/', {
	templateUrl: "partials/login.html",
	controller: "loginController"
})
.when('/main', {
	templateUrl: "partials/main.html",
	contorller: "mainController"
})
.otherwise({
	redirectTo: '/'
})


});