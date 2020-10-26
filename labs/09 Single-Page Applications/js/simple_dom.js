//console.log('page loaded');

console.log(document);

document.getElementById('userForm').oninput = function () {
	console.log('save');

	let name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;

	let paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');

	let email = document.querySelector('#userForm input[type="email"]');
	console.log(email);
	paragraphs[0].innerHTML = email.value;

	let passwd = document.querySelector('#userForm input[type="password"]');
	console.log(passwd);
	paragraphs[1].innerHTML = passwd.value;
};
/*
document.querySelector('#userForm input[type="email"]').onclick = function() {
	console.log('updating email');
	let email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};
*/