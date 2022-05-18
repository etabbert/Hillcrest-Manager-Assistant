async function checkPassword() {
	username = document.getElementById('username').value;
	password = document.getElementById('password').value;
	
	var pwhash = 0;
	
	for (i = 0; i < password.length; i++) {
		char = password.charCodeAt(i);
		pwhash = ((pwhash << 5) - pwhash) + char;
		pwhash = pwhash & pwhash;
	}

	let myResponse = await fetch("login.php", {
		method: 'POST',
		headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({username: username, pwhash: pwhash})
	});
	
	let result = await myResponse.json();
    let output = JSON.stringify(result)
    console.log(output)
	
	if (output == '{"info":true}'){
		window.location.replace('home.html');
	} else if (output == '{"info":false}'){
		document.getElementById('error').innerHTML = "Incorrect username or password!";
	} else {
		document.getElementById('error').innerHTML = "User does not exist!";
	}
}

async function writepwhash() {
	username = document.getElementById('username').value;
	password = document.getElementById('password').value;
	var pwhash = 0;
	
	for (i = 0; i < password.length; i++) {
		char = password.charCodeAt(i);
		pwhash = ((pwhash << 5) - pwhash) + char;
		pwhash = pwhash & pwhash;
	}
	
	let myResponse = await fetch("writehash.php", {
		method: 'POST',
		headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({username: username, pwhash: pwhash})
	});
}
