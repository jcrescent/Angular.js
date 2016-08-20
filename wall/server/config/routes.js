var users = require('../controllers/users.js')
module.exports = function(app){
	app.post('/add_user', users.add_or_login_user);
	app.post('/add_message', users.add_message);
	app.post('/get_messages', users.get_messages);
	app.post('/add_comment', users.add_comment);
}

