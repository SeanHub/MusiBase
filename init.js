window.onload = function(){
	var mediator = new Mediator(),
		element = new xElement();

	document.getElementById("form_search").onsubmit = function(){
		mediator.search(document.getElementById("input_search").value, function(data){
			element.removeContents(document.getElementById("container_searchresults"));
			JSON.parse(data).songs.forEach(function(song){
				document.getElementById("container_searchresults").appendChild(element.addElement("div", song.title));
			});
		});
		return false;
	}

	/*var audio = new xAudio();
	audio.onerror(function(){
		throw new Error("cannotPlayAudio");
	});
	audio.oncanplay(function(){
		console.log("this will play");
	});
	audio.onend(function(){
		console.log("ended");
	});
	audio.onpause(function(){
		console.log("paused");
	});
	audio.onplay(function(){
		console.log("playing");
	});
	audio.ontimeupdate(function(){
		document.body.innerText = Math.floor(audio.getCurrentTime());
	});*/
};