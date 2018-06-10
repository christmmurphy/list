var allItems = []; 

function addItem() {
	allItems.push(document.getElementById("newItem").value);
	console.log(allItems);
}

function makeDaList(){
	for(i = 0; i < allItems.length; i++){
		//create variable to store array item text
		var item = allItems[i];
		//create the li
		var node = document.createElement("li");
		//create the text to put in the li
		var textNode = document.createTextNode(item);
		//append li and text to ul
		document.getElementById("ulist").appendChild(node)
	}
}
