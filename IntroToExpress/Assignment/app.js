var express = require("express");
var app = express();

app.get('/',function(req,res){
	res.send("hello");
});

app.get('/speak/:animal',function(req,res){
	var animal = req.params.animal;
	// Entweder so mit nem Array
	// oder mit nem Switch case
	var noises = {
		dog: "woof",
		cat: "lel",
		fish:"blub",
		cow: "moo"
	}
	
	var sound = noises[animal];
	
	res.send('The ' + animal + " says '" + sound + "'");
	console.log("Requested")
});

app.get('/repeat/:word/:num',function(req,res){
	var word = req.params.word;
	var num = parseInt(req.params.num,10);
	var result = word;
	
	for(var i = 0; i < num - 1; i++){
		result += " " + word;
	}
	
	res.send(result);
	console.log(word,num);
	
});

app.get("*",function(req,res){
	res.send('404');
})

app.listen(3000,function(){
	console.log("Server started!");
})