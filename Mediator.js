function Mediator() {
	var search = function(term, onreturn){
		new HttpRequest().getRequest("http://ex.fm/api/v3/song/search/"+term, function(data){
			onreturn(data);
		});
	};

	return { search:search };
}