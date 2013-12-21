function xAudio() {
	var audio = new Audio(),
		eventcanplay,
		eventended,
		eventerror,
		eventpause,
		eventplay,
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

	var oncanplay = function(fn){
		removeEventListener("canplay", eventcanplay);
		addEventListener("canplay", fn);
		eventcanplay = fn;
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

	var onpause = function(fn){
		removeEventListener("pause", eventpause);
		addEventListener("pause", fn);
		eventpause = fn;
	};

	var onplay = function(fn){
		removeEventListener("play", eventplay);
		addEventListener("play", fn);
		eventplay = fn;
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

	return { getCurrentTime:getCurrentTime, getDuration:getDuration, oncanplay:oncanplay, onend:onend, onerror:onerror, onpause:onpause, onplay:onplay, ontimeupdate:ontimeupdate, play:play, pause:pause, setCurrentTime:setCurrentTime, setSource:setSource, setVolume:setVolume };
}