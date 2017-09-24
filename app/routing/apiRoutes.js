// ***** DEPENDENCIES *****
var friendsList = require("../data/friends.js");
var path = require("path");

var friends = friendsList.allFriends;

// ***** API ROUTES *****
module.exports = function(app){

	// ---- Get a json list of all available friends ----
	app.get("/api/friends", function(req, res) {
	  res.json(friendsList.allFriends);
	});

	// ---- POST request used for survey ----
	app.post("/api/friends", function(req, res){
		console.log("this will do stuff");
		friends.push(req.body);
		res.json(true);
		console.log(friends);

	});

}

// Constructor function for builiding friend objects using the
// name, photo link, and an array of the answers
function NewFriend(name, photo, answers) {
	this.name = name;
	this.photo = photo;
	this.answers = answers;
}