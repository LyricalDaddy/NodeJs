var express = require("express");
var app = express();
var count = 0;
// Routes
app.get('/',function(req, res){
	res.send("Hi there!");
});

app.get('/bye',function(req,res){
	res.send("Goodbye");
});

app.get('/dog',function(req,res){
	// This is send to the browser
	res.send("Meow!");
	// This is excecuted when someone makes a GET request to /dog
	// Refresh the /dog and watch the terminal
	//
	count++;
	console.log("/dog has been visited for the "+count+" time");
});

// Route Parameters!!!
// Hiermit kann man die GETs auslesen um die so weiter zu verarbeiten
// Wozu das ganze damit man nicht ein get für jedes subreddit macht wäre ja schwachsinn bei Tausenden subs
app.get('/r/:subreddit',function(req,res){
	var sub = req.params.subreddit;
	res.send('Welcome to the ' + sub +' subreddit')
});

// * is like: wenn nichts anderes matched nimm das (like default in switch)
// Reihenfolge ist wichtig !!!
app.get('*',function(req,res){
	res.send("404 Page not found!")
});


// Tell Express to listen for requests
app.listen(3000,function(){
	console.log("Server has started");
});
