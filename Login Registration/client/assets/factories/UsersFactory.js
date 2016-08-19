app.factory('UsersFactory', ['$http', function($http) {

function UsersFactory(){
	this.validation = function(user, callback){
		$http.post('/new_user', user).then(function(results){
			callback(results.data)
		})
	}
	this.getUsers = function(callback){
		$http.get('/get_users').then(function(results){
			callback(results.data)
		})
	}	
	this.getUser = function(user, callback){
		$http.post('/get_user', user).then(function(results){
			callback(results.data)
		})
	}	
}
  return new UsersFactory();	
}]);
