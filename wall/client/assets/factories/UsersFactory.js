app.factory('UsersFactory', ['$http', function($http) {

function UsersFactory(){
	this.validation = function(user, callback){
		console.log('Got to the factory')
		$http.post('/add_user', user).then(function(results){
			callback(results.data)
		})
	}
	this.createMessage = function(message, callback){
		$http.post('/add_message', message).then(function(results){
			callback(results.data)
		})
	}
	this.createComment = function(comment, callback){
		$http.post('/add_comment', comment).then(function(results){
			callback(results.data)
		})
	}
	this.getMessages = function(callback){
		$http.post('/get_messages').then(function(results){
			callback(results.data)
		})
	}	
	// this.getUser = function(user, callback){
	// 	$http.post('/get_user', user).then(function(results){
	// 		callback(results.data)
	// 	})
	// }	
}
  return new UsersFactory();	
}]);
