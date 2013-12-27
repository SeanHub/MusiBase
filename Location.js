function xLocation() {
	var getRelativeLocation = function(){
		return location.pathname;
	};

	var setRelativeLocation = function(location){
		history.pushState({},null,location);
	};
	
	return { getRelativeLocation:getRelativeLocation, setRelativeLocation:setRelativeLocation };
}