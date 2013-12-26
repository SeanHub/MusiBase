function HttpRequest() {
	var getRequest = function(url, onresponse, onwait){
		var xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.open("GET", url, true);
		onwait();
		xmlHttpRequest.onreadystatechange = function(){
			if(xmlHttpRequest.readyState === 4){
				onresponse(xmlHttpRequest.responseText);
			}
		}
		xmlHttpRequest.send();
	};

	return { getRequest:getRequest };
}