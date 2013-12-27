function HttpRequest() {
	var getRequest = function(url, onresponse, onwait){
		var xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.open("GET", url, true);
		onwait();
		xmlHttpRequest.onreadystatechange = function(){
			if(xmlHttpRequest.readyState === 4){
				if(xmlHttpRequest.status === 200){
					console.log(xmlHttpRequest);
					onresponse(xmlHttpRequest.responseText);
				}
				else {
					onresponse("failed");
				}
			}
		}
		xmlHttpRequest.send();
	};

	return { getRequest:getRequest };
}