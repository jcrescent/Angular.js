var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var Messages = mongoose.model('Messages');
var Comments = mongoose.model('Comments')
function UsersController(){
	this.add_or_login_user = function(req,res){
		console.log("got to the back controller")
		Users.findOne({name: req.body.name}, function(err, user){
			console.log(user)
			if(user === null){
				var new_user = new Users({name: req.body.name})
    			new_user.save(function(err){
    				if(err){
    					console.log('could not add new user')
    					res.json(err)
    				}else{
    					console.log('added')
    					res.json(new_user)
    				}
    			})
			}else{
				res.json(user)
			}
		})
    }
	this.add_message = function(req, res){
	 	Users.findOne({_id: req.body._user}, function(err, user){
			var new_message = new Messages({text: req.body.text})
			new_message._user = req.body._user
			new_message.save(function(err){
				user._messages.push(new_message);
				user.save(function(err){
					if(err){
						res.json(err)
					}else{
						res.json(new_message)
					}
				})
			})	
		})
	}
	this.add_comment = function(req, res){
		console.log(req.body._message)
		Messages.findOne({_id: req.body._message}, function(err, message){
			// console.log(message)
			var new_comment = new Comments({text: req.body.text})
			// console.log(new_comment)
			new_comment._message = message._id
			new_comment.save(function(err){
				message._comments.push(new_comment)
				message.save(function(err){
					Users.findOne({_id: req.body._user}, function(err, user){
						// console.log(user)
						new_comment._user = user._id
						new_comment.save(function(err){
							user._comments.push(new_comment)
							user.save(function(err){
								res.send()
							})
						})
					})
				})
			})
		})
	}
	this.get_messages = function(req, res){
		Messages.find({})
		.populate({
			path:'_comments', 
				populate:[{
					path: "_user"
				}]
			})
		.populate('_user')
		.exec(function(err, messages){
			if(err){
				console.log('get users failed')
			} else{
				console.log(messages)
				res.json(messages)
			}	
		})
	}
}
module.exports = new UsersController();