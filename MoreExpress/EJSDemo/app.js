var express = require("express");
var app = express();

// Look into public folder. Default is to look only into the views folder
// anders findet er sonst nicht die app.css
app.use(express.static("public"));

app.listen(3000,function(){
	console.log("Started Server!");
})


app.get("/hello/:name",function(req,res){
	
	var name = req.params.name;
	// Render nimmt aus dem /views folder die entsprechende Datei heraus um diese zu rendern
	// im zweiten Parameter können variablen übergeben werden in einem JSON ähnlichen format.
	res.render("home.ejs",{nameVar: name});
});

app.get("/posts",function(req,res){
	
	// Using loop in EJS to loop through Object
	var posts = [
		{title:"Hello", author:"Adele"},
		{title:"Why are u runnin", author:"u already know"},
		{title:"18", author:"AOE"}
	]
	res.render("posts.ejs",{posts:posts});
});

