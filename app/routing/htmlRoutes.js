var express = require("express");

var path = require("path");

// var app = express();
// Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
// var home_route = app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/../public/home.html"));
// });

// var survery_route = app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "/../public/survey.html"));
// });

module.exports = function(app){

	// Displays the home page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// Displays the survey page
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}
