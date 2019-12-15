var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var friends = ["Coach","Boo","Johnny","Guzel","Momo"];

//so you can write page instead of page.ejs in .render("page") instead of .render("page.ejs")
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/friends",function(req,res){
	res.render("friends",{friends:friends});
});

// POST REQUEST
app.post("/addfriend",function(req,res){
	var newFriend = req.body.newfriend;
	friends.push(newFriend); // .push() == add something to an array
	res.redirect("/friends");
});

app.listen(3000,function(){
	console.log("Server started!");
});
