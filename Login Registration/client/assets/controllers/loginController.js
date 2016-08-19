app.controller('loginController', ['$scope', 'UsersFactory', '$location', '$cookies', function($scope, UsersFactory, $location, $cookies){
$scope.error;	
	$scope.login = function(){
		UsersFactory.getUser($scope.match, function(user){
			if(user === null){
				$scope.error = "Invalid Email or password"
				$scope.match = {};
			} else {
				$cookies.putObject('user', {name: (user.first+" "+user.last)})
				$location.url('/welcome');


			}

		})	
	}
}])