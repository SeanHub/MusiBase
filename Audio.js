function xAudio() {
	var audio = new Audio(),
		eventerror,
		eventtimeupdate;

	var addEventListener = function(event, fn){
		audio.addEventListener(event, fn, false);
	};

	var getCurrentTime = function(){
		return audio.currentTime;
	};

	var getDuration = function(){
		return audio.duration;
	};

	var load = function(){
		audio.load();
	};

	var onend = function(fn){
		removeEventListener("ended", eventended);
		addEventListener("ended", fn);
		eventended = fn;
	};

	var onerror = function(fn){
		removeEventListener("error", eventerror);
		addEventListener("error", fn);
		eventerror = fn;
	};

	var ontimeupdate = function(fn){
		removeEventListener("timeupdate", eventtimeupdate);
		addEventListener("timeupdate", fn);
		eventtimeupdate = fn;
	};

	var pause = function(){
		audio.pause();
	};

	var play = function(){
		audio.play();
	};

	var removeEventListener = function(event, fn){
		audio.removeEventListener(event, fn, false);
	};

	var setCurrentTime = function(currentTime){
		audio.currentTime = currentTime;
	};

	var setSource = function(source){
		audio.src = source;
		load();
	};

	var setVolume = function(volume){
		audio.volume = volume;
	};

	return { getCurrentTime:getCurrentTime, getDuration:getDuration, onend:onend, onerror:onerror, ontimeupdate:ontimeupdate, play:play, pause:pause, setCurrentTime:setCurrentTime, setSource:setSource, setVolume:setVolume };
}