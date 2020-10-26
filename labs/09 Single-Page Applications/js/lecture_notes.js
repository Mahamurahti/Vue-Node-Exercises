let notes = [];

/*
 * displays the 'add' screen if this has been bookmarked by user
 */
if (window.location.hash === '#add') {displayAdd();}
else if (window.location.hash === '#edit'){displayEdit();}
else if(notes.length === 0){displayAdd();}
window.onhashchange = function () {
	if (window.location.hash === '#add') {displayAdd();}
	else if (window.location.hash === '#edit'){displayEdit();}
}
function displayAdd(){
	document.getElementById('addPage').style.display = 'block';
	document.getElementById('editPage').style.display = 'none';
}
function displayEdit(){
	document.getElementById('addPage').style.display = 'none';
	document.getElementById('editPage').style.display = 'block';
}

document.querySelector('#addPage button').onclick = function() {
	console.log('add note');
	let item = {
		title: document.querySelector('#addPage input').value,
		note: document.querySelector('#addPage textarea').value
	};
	notes.push(item);
	document.querySelector('#addPage input').value = '';
	document.querySelector('#addPage textarea').value = '';
	loadList();
};

/*
 * handles navigation between the add and edit 'screens'
 */ 
document.querySelector('nav > ul > li:nth-child(1)').onclick = function() {
	console.log('first link clicked');
};

document.querySelector('nav > ul > li:nth-child(2)').onclick = function() {
	console.log('second link clicked');
};

document.getElementById('editPage').oninput = updateNote;

function updateNote() {
	console.log('update note');
	let title = document.querySelector('#editPage input').value;
	let note = document.querySelector('#editPage textarea').value;
	let id = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log(id);
	let updated = {title: title, note: note};
	console.log(updated);
	notes[id] = {title: title, note: note};
	loadList();
}

function display(element) {
	console.log('display');
	console.log(element.parentNode.parentNode.id);
	let details = document.getElementById('details');
	let id = element.parentNode.parentNode.id;
	document.querySelector('#editPage input').value = notes[id].title;
	document.querySelector('#editPage textarea').value = notes[id].note;
	document.querySelector('#editPage p').innerHTML = id;
}

function rem(element) {
	console.log('remove');
	let id = element.parentNode.parentNode.id;
	console.log(id);
	notes.splice(id, 1);
	loadList();
	let editId = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log('id: '+id);
	console.log('editId: '+editId);
	if (id == editId) {
		console.log('deleted document being edited!');
		document.querySelector('#editPage input').value = '';
		document.querySelector('#editPage textarea').value = '';
	}
}

function loadList() {
	let table = document.getElementById('list');
	table.innerHTML = '';
	for (let i = 0; i<notes.length; i++) {
		let row = document.createElement('tr');
		row.id = i;
		row.innerHTML = '<td><a onclick="display(this)" href="#">'+notes[i].title+'</a></td><td><a onclick="rem(this)" class="delete" href="#">delete</a></td>';
		table.appendChild(row);
	}
}