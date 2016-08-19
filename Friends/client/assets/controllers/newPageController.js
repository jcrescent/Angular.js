console.log("pajfdnvpausdnv")
app.controller('newPageController', ['$scope','FriendsFactory', '$location', function($scope, FriendsFactory, $location){
	
$scope.addFriend = function(){
	console.log($scope.newFriend)
  	FriendsFactory.create($scope.newFriend, function(results){
  	$scope.newFriend = {};
  	$location.url('/')
  });
};

}]);