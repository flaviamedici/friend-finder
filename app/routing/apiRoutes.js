// ***** DEPENDENCIES *****
var friends = require("../data/friends.js");
var path = require("path");
var fs = require("fs");

// var friends = friendsList.allFriends;

// ***** API ROUTES *****
module.exports = function(app){



	// ---- Get a json list of all available friends ----
	app.get("/api/friends", function(req, res) {
	  res.json(friends);
	});

	// ---- POST request used for survey ----
	app.post("/api/friends", function(req, res){
		console.log("this will do stuff");
		var friendInput = req.body; // stores input from user survey
		res.json(true);
		console.log("\nName: " + friendInput.name + "\nPhoto: " +
			friendInput.photo + "\nScores: " + friendInput.answers);

		friendInput.answers = friendInput.answers.split(",");

		friends.push(friendInput);
		getAvgScore(friends, friendInput);

	});

}

// Constructor function for builiding friend objects using the
// name, photo link, and an array of the answers
function NewFriend(name, photo, answers) {
	this.name = name;
	this.photo = photo;
	this.answers = answers;
}

// Function to get average of answers
// look into methods: slice() and pop()
function getAvgScore(friends, friendInput) {
	var current = friends.pop();
	console.log(current);

}
