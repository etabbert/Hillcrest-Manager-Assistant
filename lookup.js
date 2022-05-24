async function employeeSearch() {
	if (document.getElementById('lastnameQuery').value == "") {
		document.getElementById('error').innerHTML = "No last name provided";
	} else {
		document.getElementById('error').innerHTML = "";
		lastname = document.getElementById('lastnameQuery').value;
	}
	
	let myResponse = await fetch("lookup.php", {
		method: 'POST',
		headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({lastname: lastname})
	});
	
	let result = await myResponse.json();
    let output = JSON.stringify(result)
	
    console.log(result);
	
	if (output == "[]") {
		finalText = "";
		document.getElementById('error').innerHTML = "No user recorded with this name";
	} else {
		finalText = "";
		document.getElementById('error').innerHTML = "";
		if ((typeof result.firstname) == "string") {
			finalText = result.firstname + " " + result.lastname + " " + result.role + "</br>" + 
			result.email + " " + result.phone + "</br></br>";
		} else {
			for (i = 0; i < result.firstname.length; i++) {
				finalText += result.firstname[i] + " " + result.lastname[i]	+ " " + result.role[i] + "</br>" + 
				result.email[i] + " " + result.phone[i] + "</br></br>";
			}
		}
	}
	document.getElementById('queryResults').innerHTML = finalText;
}