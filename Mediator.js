function Mediator() {
	var search = function(term, onreturn, onwait){
		new HttpRequest().getRequest("http://ex.fm/api/v3/song/search/"+term, function(data){
			onreturn(data);
		},
		function(){
			onwait();
		});
	};

	return { search:search };
}