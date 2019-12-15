Step by Step what has been done

1. npm init -> and create the package.json
2. install express with npm install express --save
3. write app.js
4. create the views folder(wichtig da schaut die render funktion rein!!!) and [npm install ejs --save]

5. adding loops in posts.ejs that run through the obj.
6. adding a style sheet and linking it -- wichtig ist hier
	- app.js sucht nach recourcen nur in /views da sich aber das css file in public befindet muss man es explizit 
	
7. Partials: um das boilerplate nicht jedesmal aufs EJS zu copy pasten gibt es partials.
	- create header and footer in the partials folder
	- use them with by inclding them at the top and bottom of the ejs file with
		- <%- include("partials/header") %>