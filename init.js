//for all functions that must be run on the static part of the spa
//tie onpopstate to a getrequest function to load selected page
//get load page details from url or somewhere else?
//add try/catch and if not null checks
window.onload = function(){
	var app = {
		dynamicLoad:new DynamicLoad(),
		location:new xLocation(),
		dynamicContainer:document.getElementById("container_dynamic")
	};

	document.getElementById("form_search").onsubmit = function(){
		app.location.setRelativeLocation("search.html?q="+document.getElementById("input_search").value);
		app.dynamicLoad.loadPage(this.getAttribute("action"), app.dynamicContainer, function(){
			app.dynamicContainer.innerText = "loading";
		});
		return false;
	}

	//only run when page loaded and back/forward buttons pressed
	window.onpopstate = function(data){
		console.log(app.location.getRelativeLocation());
		app.dynamicLoad.loadPage(app.location.getRelativeLocation(), app.dynamicContainer, function(){
			app.dynamicContainer.innerText = "loading";
		});
	}

	document.getElementById("link_chart").onclick = function(){
		app.location.setRelativeLocation("chart.html");
		console.log(app.location.getRelativeLocation());
		app.dynamicLoad.loadPage(app.location.getRelativeLocation(), app.dynamicContainer, function(){
			app.dynamicContainer.innerText = "loading";
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