

/* create a close button and append it to each new list item */
var listItems = document.getElementsByTagName("li");

for(var i=0; i<listItems.length; i++){
	var buttons = document.createElement("button");
	buttons.innerText = "delete";
	buttons.className = "close";
	listItems[i].appendChild(buttons);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close"); 

/*var theList = document.getElementById("todoList");
for(var i=0; i < theList.length; i++){
	var childToRemove = theList.children[i];
	theList.children[i].children.onclick = function(){
		childToRemove.parentNode.removeChild(childToRemove);
	}
}

---NEED TO TEST MORE! */

for(var i=0; i<close.length; i++){
	close[i].onclick = function(){
		var itemToHide = this.parentElement;
		itemToHide.style.display = "none";
	}
}



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener("click", function(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle("checked");
		// tagName returns the element name in the uppercase form
	}
}, false);

// Create a new list item when clicking on the "Add" button

function addNewListItem(){
	var li = document.createElement('li');
	var inputValue = document.getElementById('todoInput').value;
	var inputText = document.createTextNode(inputValue);
	li.appendChild(inputText);
	if(inputValue === ""){
		alert("Add a To Do!")
	} else {
		list.appendChild(li);
	}
	document.getElementById('todoInput').value = "";

	var newButton = document.createElement("button");
	var newButtonText = document.createTextNode("delete");
	newButton.className = "close";
	newButton.appendChild(newButtonText);
	li.appendChild(newButton);

	
	for(var i=0; i<close.length;i++){
		close[i].onclick = function(){
			var itemToHide = this.parentElement;
			itemToHide.style.display = "none"; 
		}
	}
	
}