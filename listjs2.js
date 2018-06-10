window.onload = makeDaList();
var allItems = ["item 1"];

//add item to array, and then add array to local storage
function addItem() {
	allItems.push(document.getElementById("newItem").value);
	console.log(allItems);
	localStorage.clear();
	localStorage.setItem('items', allItems);
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
