app.controller('welcomeController', ['$scope', 'UsersFactory', '$location', '$cookies', function($scope, UsersFactory, $location, $cookies){
$scope.users = [];
	if ($cookies.getObject('user')){
		$scope.current = $cookies.getObject('user');
	}else{
		$location.url('/login')
	}
	$scope.allUsers = function(){
		UsersFactory.getUsers(function(results){
			$scope.users = results
		})
	}
	$scope.allUsers();
}])