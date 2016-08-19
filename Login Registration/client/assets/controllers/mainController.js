app.controller('mainController',[ '$scope', 'UsersFactory', '$location', function($scope, UsersFactory, $location){
	$scope.errors;
	$scope.pass_confirm;
	$scope.dup_error;
	$scope.validate = function(){
		if ($scope.newUser.confirm !== $scope.newUser.password){
				$scope.pass_confirm = "Confirmation must match password"
				return
			}
		UsersFactory.validation($scope.newUser, function(results){

			if (results.errmsg){
				$scope.dup_error = "Email address already exists"
			}
			else if (results.errors == null){
				$location.url('/welcome')
			}
			$scope.errors = results.errors
		})
	}
}]);