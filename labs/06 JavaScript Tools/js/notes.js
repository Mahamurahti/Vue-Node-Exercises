'use strict';

let notes = [];

function addItem() {
	let textbox = document.getElementById('item');
	let itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	let newItem = {title: itemText, quantity: 1};
	// If this method finds a duplicate, then no new items are pushed,
	// If this methods doesn't find a duplicate, push new item.
	if(!checkForDuplicates(newItem.title)){
		notes.push(newItem);
	}
	displayList();
}

function checkForDuplicates(title){
	let hasItem = false;
	for(let i = 0; i < notes.length; i++){
		// If a duplicate is found, just add + 1 to quantity to the found element
		if(notes[i].title === title){
			notes[i].quantity += 1;
			// If a duplicate was found return true
			// This boolean determines is a new element pushed
			hasItem = true;
		}
	}
	return hasItem;
}

function displayList() {
	let table = document.getElementById('list');
	table.innerHTML = '';
	for (let i = 0; i < notes.length; i++) {
		let node = undefined;
		let note = notes[i];
		node = document.createElement('tr');
	    node.innerHTML = '<td>'+note.title+'</td>' +
			 			 '<td>'+note.quantity+'</td>' +
						 '<td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
		table.appendChild(node);
	}
	// Save list when display is updated
	saveList();
}

function deleteIndex(i) {
	notes.splice(i, 1);
	displayList();
}

let button = document.getElementById('add');
button.onclick = addItem;

function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function init(){
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

// Load local storage onload
window.onload = init;
