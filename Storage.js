function xStorage() {
	var getItems = function(){
		var items = [];
		for(item in localStorage){
			items.push(JSON.parse(localStorage[item]));
		}
		return items;
	};

	var getLastItem = function(){
		return JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-1)));
	};

	var removeItem = function(index){
		localStorage.removeItem(localStorage.key(index));
	};

	var storeItem = function(item){
		var key = localStorage.length;
		var checkForEmptySpace = function(key){
			if(localStorage.getItem(key) === null){
				localStorage.setItem(key, JSON.stringify(item));
			}
			else {
				checkForEmptySpace(++key)
			}
		}
		checkForEmptySpace(key);
	};

	return { getItems:getItems, getLastItem:getLastItem, removeItem:removeItem, storeItem:storeItem }
}