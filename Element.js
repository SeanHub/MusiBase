function xElement() {
	var addElement = function(node, text){
		var element = document.createElement(node);
		element.innerText = text;
		return element;
	};

	var removeContents = function(element){
		while(element.firstChild){
			element.removeChild(element.firstChild);
		}
	};

	return { addElement:addElement, removeContents:removeContents };
}