app.controller('editPageController', ['$scope','FriendsFactory', '$routeParams', '$location',  function($scope, FriendsFactory, $routeParams, $location) {
  
  $scope.getFriend = function(){
    FriendsFactory.getFriend($routeParams.id, function(friend){
    var date = new Date(friend.birth)
    date.toLocaleDateString('en-US');
    friend.birth = date;
    $scope.editFriend = friend;
    });
  }
  $scope.getFriend();

  $scope.changeFriend = function(friend){
    FriendsFactory.update($scope.editFriend, $routeParams.id, function(results){
    $scope.editFriend = {};
    $location.url('/friends')
    });
  };

  }]);