function DynamicLoad() {
	var executeScripts = function(html){
		var scripts = html.getElementsByTagName("script");
		for(var i=0; i<scripts.length; i++){
			eval(scripts[i].innerHTML);
		}
	};

	var injectData = function(element, data){
		element.innerHTML = data;
	};

	var loadPage = function(page, element, onwait){
		new HttpRequest().getRequest(page, function(data){
			injectData(element, data);
			executeScripts(element);
		},
		function(){
			onwait();
		});
	};

	return { loadPage:loadPage };
}