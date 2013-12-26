//for all functions that must be run on every page of the spa
//tie onpopstate to a getrequest function to load selected page
//add try/catch and if not null checks
window.onload = function(){
	var mediator = new Mediator(),
		element = new xElement();

	document.getElementById("form_search").onsubmit = function(){
		history.pushState({},"search","search?q="+document.getElementById("input_search").value);
		new HttpRequest().getRequest("search.html", function(data){
			document.getElementById("container_dynamic").innerHTML = data;
			var scripts = document.getElementById("container_dynamic").getElementsByTagName("script");
			for(var i=0; i<scripts.length; i++){
				eval(scripts[i].innerHTML);
			}
		},
		function(){
			document.getElementById("container_dynamic").innerHTML = "loading";
		});
		return false;
	}

	//only run when page loaded and back/forward buttons pressed
	window.onpopstate = function(data){
		console.log(data);
	}

	document.getElementById("link_chart").onclick = function(){
		history.pushState({},"chart","chart");
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