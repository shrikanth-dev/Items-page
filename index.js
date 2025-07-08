function addItem() {
const listItems = document.getElementById("maindiv");
const newItem =  document.createElement("li");
const text = document.createTextNode("new item");
 newItem.appendChild(text);
 listItems.appendChild(newItem);
 debugger;
 document.getElementById("container-div").className += " list-container";
}

function removeitem() {
 const removeItems = document.getElementById("container-div");
removeItems.classList.remove("list-container");
}