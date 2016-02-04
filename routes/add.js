var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here

	//console.log(data);
	// res.render('index', data);
	newFriend = {};
	newFriend['name'] = req.query.name;
	newFriend['description'] = req.query.description;
	newFriend['imageURL'] = "http://lorempixel.com/400/400/people/";

	data['friends'].push(newFriend);

	res.render('add', data);
	// data["friends"].push(newFriend);
 }