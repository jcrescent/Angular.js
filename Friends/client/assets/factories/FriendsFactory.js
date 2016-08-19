console.log('FriendsFactory')
app.factory('FriendsFactory', ['$http', function($http) {

  function FriendsFactory(){
    var _this = this;

    this.create = function(newfriend,callback){
      console.log('yo son')
      console.log(newfriend)
      $http.post('/friends', newfriend).then(function(results){
        console.log(results.data);
        if (typeof(callback) == 'function'){
          callback(results.data);
        }
      });
    };
    this.update = function(edit_friend, id, callback){
      $http.post(`/friends/${id}`, edit_friend).then(function(results){
        var friend = results.data;
        callback(friend);
      });  
    };
    this.index = function(callback){
      $http.get('/friends').then(function(results){
        console.log(results.data);
       var friends = results.data;
        callback(friends);
      });
    };
    this.delete = function(id, callback){
      $http.delete(`/friends/${id}`).then(function(){
        callback();
      })
    };
    this.show = function(id, callback){
      $http.get(`/friend/${id}`).then(function(results){
        var friend = results.data;
        callback(friend);
      }) 
    };
    this.getFriends = function(callback){
      console.log("here!")
      $http.get('/friends').then(function(results){
        var friends = results.data
        callback(friends);
      })
    };
    this.getFriend = function(id, callback){
      console.log(id)
      console.log("im here")
        $http.get(`/edit_friend/${id}`).then(function(results){
          var friend = results.data;
          callback(friend);
        })  
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);