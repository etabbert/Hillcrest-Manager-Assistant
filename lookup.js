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
			phone1 = String(result.phone).slice(0,3);
			phone2 = String(result.phone).slice(3,6);
			phone3 = String(result.phone).slice(6,10);
			phoneFormat = '(' + phone1 + ')' + phone2 + '-' + phone3;
			
			finalText = result.firstname + " " + result.lastname + " " + result.role + "</br>" + 
			result.email + " " + phoneFormat + "</br>" + 
			`<a href='editUser.html?ID=${result.studentid}'>Edit Employee</a>` + "</br></br>";
		} else {
			for (i = 0; i < result.firstname.length; i++) {
				phone1 = String(result.phone[i]).slice(0,3);
				phone2 = String(result.phone[i]).slice(3,6);
				phone3 = String(result.phone[i]).slice(6,10);
				phoneFormat = '(' + phone1 + ')' + phone2 + '-' + phone3;
				
				finalText += result.firstname[i] + " " + result.lastname[i]	+ " " + result.role[i] + "</br>" + 
				result.email[i] + " " + phoneFormat + "</br>" + 
				`<a href='editUser.html?ID=${result.studentid[i]}'>Edit Employee</a>` + "</br></br></br>";
			}
		}
	}
	document.getElementById('queryResults').innerHTML = finalText;
}