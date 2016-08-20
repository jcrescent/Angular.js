app.controller('loginController',['$scope', "UsersFactory", "$location",'$cookies', function($scope, UsersFactory, $location, $cookies){
	$scope.error;
	$scope.login= function(){
		console.log("ran login function")
		UsersFactory.validation($scope.user, function(user){
			if(user === null){
				$scope.error = "Name already exists" 
			}else{
				console.log(user)
				$cookies.putObject('user', user)
				$location.url('/main')
			}
		})
	}
}])