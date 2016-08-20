var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
$routeProvider

.when('/main', {
	templateUrl: "partials/main.html",
	controller: "mainController"
})
.when('/welcome', {
	templateUrl: "partials/welcome.html",
	controller: "welcomeController"
})
.when('/', {
	templateUrl: "partials/login.html",
	controller: "loginController"
})
.otherwise({
	redirectTo: '/'
})


});