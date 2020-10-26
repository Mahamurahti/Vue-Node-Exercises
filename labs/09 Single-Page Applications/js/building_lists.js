
let request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
let data = JSON.parse(request.responseText);
console.log(data);

let books = data.books;

let list = document.createElement('table');
let h1 = document.createElement('h1');
for (let i = 0; i < books.length; i++) {
	console.log(books[i].title);
	let row = document.createElement('tr');
	row.onclick = function (event) {
		let id;
		for (let j = 0; j < books.length; j++) {
			if(event.target.innerText === books[j].title.toString()){id = j;}
			else if(event.target.innerText === books[j].year.toString()){id = j;}
		}
		h1.innerHTML = books[id].title;
	}

	let item = document.createElement('th');
	item.innerHTML = books[i].title;

	let itemYear = document.createElement('td');
	itemYear.innerHTML = books[i].year;

	row.appendChild(item);
	row.appendChild(itemYear);
	list.appendChild(row);
}
document.body.prepend(h1);
document.body.appendChild(list);
