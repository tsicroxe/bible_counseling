// var users = require('./../controllers/users.js');
var mail = require('./../controllers/mail.js');

module.exports = function(app){
	app.post('/email', mail.email)
}
