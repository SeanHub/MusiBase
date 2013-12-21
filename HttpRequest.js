function HttpRequest() {
	var getRequest = function(url, onresponse){
		var xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.open("GET", url, true);
		xmlHttpRequest.onreadystatechange = function(){
			if(xmlHttpRequest.readyState === 4){
				onresponse(xmlHttpRequest.responseText);
			}
		}
		xmlHttpRequest.send();
	};

	return { getRequest:getRequest };
}