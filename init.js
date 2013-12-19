function App() {
	var start = function(){
		var audio = new xAudio();
		audio.onerror(function(){
			throw new Error("cannotPlayAudio");
		});
		audio.ontimeupdate(function(){
			document.body.innerText = Math.floor(audio.getCurrentTime());
		});
		audio.setSource("http://kolibaba.com.ua/uploads/Music/Public/Saliva_-_Your_Disease.mp3");
		audio.play();
	}();
}

window.onload = function(){
	var app = new App();
};