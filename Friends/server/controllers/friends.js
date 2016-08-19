var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
  this.index = function(req,res){
    console.log('made it to the backend!')
    Friend.find({}, function(err, friends){
      console.log(friends)
    	if(err){console.log('nope')}
    	else{
    		console.log('success')
    		res.json(friends);
  };
    	}
    }) 
  this.create = function(req,res){
    console.log(req.body)
    // console.log(req)
    var new_friend = new Friend({first: req.body.first, last: req.body.last, birth: req.body.birth})
    new_friend.save(function(err){
    	if(err){console.log('Nothing created')}
    	else{
    		console.log('added')
    		res.json(err)
    	}
    })
  };
  this.update = function(req,res){
    console.log("weeeeeooooooooeeeeeeooooo")
  	Friend.update({_id: req.params.id},{first: req.body.first, last: req.body.last, birth: req.body.birth}, function(err){
  		if(err){console.log('updated!')}
  		else{
  			console.log('not updated');
        res.json(err)
  		}
  	})
  };
  this.delete = function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
    	if(err){console.log('unsuccessful delete')}
    	else{
    		console.log('deleted')
        res.json(err)
		  }
    })
  };
  this.show = function(req,res){
  	Friend.findOne({_id: req.params.id}, function(err, friend){
  		if(err){console.log('Cannot show')}
  		else{
  			console.log('Showing')
			  res.json(friend);
  		}
  	})
  };
}
module.exports = new FriendsController();