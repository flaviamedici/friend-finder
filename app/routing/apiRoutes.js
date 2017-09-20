// Get all friends
var allFriends = app.get("/api/friends", function(req, res) {
  res.json(friends);
});

// Create New Friends - takes in JSON input
var makeFriends = app.post("/api/friends", function(req, res) {
  var newfriend = req.body;
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friends.push(newfriend);

  res.json(newfriend);
});

module.exports(allFriends);
