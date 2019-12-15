var request = require('request');
request("https://raw.githubusercontent.com/LyricalDaddy/LyricalDaddy.github.io/master/assets/songs/SongDB.json",function(error, response, body){
	if(error){
		console.log("Something went wrong!" + error);
	}
	else{
		if(response.statusCode == 200){
			//Things worked
			trackList = JSON.parse(body);
			console.log(trackList.Tracks[1].name);
		}	
	}
});