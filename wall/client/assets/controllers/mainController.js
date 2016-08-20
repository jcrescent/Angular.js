app.controller("mainController", ['$scope', 'UsersFactory', '$location', '$cookies', function($scope, UsersFactory, $location, $cookies){
	$scope.user = $cookies.getObject('user'); 
	$scope.messages=[];
	$scope.newCommentPost={};
	$scope.allMessages = function(){
		UsersFactory.getMessages(function(results){
			$scope.messages = results;
		})
	}
	$scope.allMessages();
	$scope.newMessage = function(){
		$scope.newMessagePost._user = $scope.user._id;
		UsersFactory.createMessage($scope.newMessagePost, function(){
			$scope.newMessagePost = {};
			$scope.allMessages();
		})
	}
	$scope.newComment = function(id){
		$scope.newCommentPost.text = $scope.messages[id].comment
		$scope.newCommentPost._user = $scope.user._id;
		$scope.newCommentPost._message = id
		UsersFactory.createComment($scope.newCommentPost, function(){
			$scope.newCommentPost = {};
			$scope.allMessages()
		})
	}
}])