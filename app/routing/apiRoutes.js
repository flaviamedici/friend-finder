// ***** DEPENDENCIES *****
var friendsList = require("../data/friends.js");
var express = require("express");
var path = require("path");

// ***** API ROUTES *****
module.exports = function(app){

	// Get a json list of all available friends
	app.get("/api/friends", function(req, res) {
	  res.json(friendsList.allFriends);
	});

	// POST request used for survey
	app.post("/api/friends", function(req, res){
		console.log("this will do stuff");
	});

}