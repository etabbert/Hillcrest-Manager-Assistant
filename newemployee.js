async function writeEmployee() {
	firstname = document.getElementById('firstname').value;
	lastname = document.getElementById('lastname').value;
	studentid = document.getElementById('studentid').value;
	phone = document.getElementById('phone').value;
	email = document.getElementById('email').value;
	if (document.querySelector('input[name="checker"]:checked') == null) {
		checker = false;
	} else {
		checker = true;
	}
	if (document.querySelector('input[name="role"]:checked') == null) {
		document.getElementById('error').innerHTML = "Please select the employee role";
	} else {
		role = document.querySelector('input[name="role"]:checked').value;
	}
	mondayStart = document.getElementById('mondayStart').value;
	mondayStop = document.getElementById('mondayStop').value;
	tuesdayStart = document.getElementById('tuesdayStart').value;
	tuesdayStop = document.getElementById('tuesdayStop').value;
	wednesdayStart = document.getElementById('wednesdayStart').value;
	wednesdayStop = document.getElementById('wednesdayStop').value;
	thursdayStart = document.getElementById('thursdayStart').value;
	thursdayStop = document.getElementById('thursdayStop').value;
	fridayStart = document.getElementById('fridayStart').value;
	fridayStop = document.getElementById('fridayStop').value;
	saturdayStart = document.getElementById('saturdayStart').value;
	saturdayStop = document.getElementById('saturdayStop').value;
	sundayStart = document.getElementById('sundayStart').value;
	sundayStop = document.getElementById('sundayStop').value;
	
	console.log(checker)
	console.log(role)
	
	
	
	let myResponse = await fetch("newemployee.php", {
		method: 'POST',
		headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({firstname: firstname, lastname: lastname, studentid: studentid, phone: phone, email: email, checker: checker, role: role, mondayStart: mondayStart, mondayStop: mondayStop, tuesdayStart: tuesdayStart, tuesdayStop: tuesdayStop, wednesdayStart: wednesdayStart, wednesdayStop: wednesdayStop, thursdayStart: thursdayStart, thursdayStop: thursdayStop, fridayStart: fridayStart, fridayStop: fridayStop, saturdayStart: saturdayStart, saturdayStop: saturdayStop, sundayStart: sundayStart, sundayStop: sundayStop})
	});
	
	let result = await myResponse.json();
    let output = JSON.stringify(result)
    console.log(output)
}