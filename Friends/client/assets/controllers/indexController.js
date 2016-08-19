app.controller('indexController', ['$scope','FriendsFactory', '$routeParams', '$location', function($scope, FriendsFactory, $routeParams, $location) {
	$scope.friends=[];

	$scope.getFriends = function(){
		console.log('running indexController getfriends')
		FriendsFactory.getFriends(function(friends){
			$scope.friends = friends;
		})
	}
	$scope.getFriends();	

	$scope.deleteFriend = function(friend){
		FriendsFactory.delete(friend, function(results){
			$scope.getFriends();
		})
	}
}])
// $scope.deleteFriend = function(id){
// 	FriendsFactory.delete(id , function())
// }	