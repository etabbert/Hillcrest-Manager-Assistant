async function writeEmployee() {
	if (document.getElementById('firstname').value == "") {
		document.getElementById('error').innerHTML = "Please enter the employee first name";
	} else {
		firstname = document.getElementById('firstname').value;
	}

	if (document.getElementById('lastname').value == "") {
		document.getElementById('error').innerHTML = "Please enter the employee last name";
	} else {
		lastname = document.getElementById('lastname').value;
	}
	
	studentidInput = document.getElementById('studentid').value;
	let studentid = ('' + studentidInput).replace(/\D/g, '');
	
	inputPhone = document.getElementById('phone').value;
	let phone = ('' + inputPhone).replace(/\D/g, '');

	
	if (document.getElementById('email').value == "") {
		document.getElementById('error').innerHTML = "Please enter the employee email";
	} else {
		email = document.getElementById('email').value;
	}
	
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
	
	mondayStartInput = document.getElementById('mondayStart').value;
	let mondayStart = ('' + mondayStartInput).replace(/\D/g, '');
	mondayStopInput = document.getElementById('mondayStop').value;
	let mondayStop = ('' + mondayStopInput).replace(/\D/g, '');
	tuesdayStartInput = document.getElementById('tuesdayStart').value;
	let tuesdayStart = ('' + tuesdayStartInput).replace(/\D/g, '');
	tuesdayStopInput = document.getElementById('tuesdayStop').value;
	let tuesdayStop = ('' + tuesdayStopInput).replace(/\D/g, '');
	wednesdayStartInput = document.getElementById('wednesdayStart').value;
	let wednesdayStart = ('' + wednesdayStartInput).replace(/\D/g, '');
	wednesdayStopInput = document.getElementById('wednesdayStop').value;
	let wednesdayStop = ('' + wednesdayStopInput).replace(/\D/g, '');
	thursdayStartInput = document.getElementById('thursdayStart').value;
	let thursdayStart = ('' + thursdayStartInput).replace(/\D/g, '');
	thursdayStopInput = document.getElementById('thursdayStop').value;
	let thursdayStop = ('' + thursdayStopInput).replace(/\D/g, '');
	fridayStartInput = document.getElementById('fridayStart').value;
	let fridayStart = ('' + fridayStartInput).replace(/\D/g, '');
	fridayStopInput = document.getElementById('fridayStop').value;
	let fridayStop = ('' + fridayStopInput).replace(/\D/g, '');
	saturdayStartInput = document.getElementById('saturdayStart').value;
	let saturdayStart = ('' + saturdayStartInput).replace(/\D/g, '');
	saturdayStopInput = document.getElementById('saturdayStop').value;
	let saturdayStop = ('' + saturdayStopInput).replace(/\D/g, '');
	sundayStartInput = document.getElementById('sundayStart').value;
	let sundayStart = ('' + sundayStartInput).replace(/\D/g, '');
	sundayStopInput = document.getElementById('sundayStop').value;
	let sundayStop = ('' + sundayStopInput).replace(/\D/g, '');	
	
	let myResponse = await fetch("newemployee.php", {
		method: 'POST',
		headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({firstname: firstname, lastname: lastname, studentid: studentid, phone: phone, email: email, checker: checker, role: role, mondayStart: mondayStart, mondayStop: mondayStop, tuesdayStart: tuesdayStart, tuesdayStop: tuesdayStop, wednesdayStart: wednesdayStart, wednesdayStop: wednesdayStop, thursdayStart: thursdayStart, thursdayStop: thursdayStop, fridayStart: fridayStart, fridayStop: fridayStop, saturdayStart: saturdayStart, saturdayStop: saturdayStop, sundayStart: sundayStart, sundayStop: sundayStop})
	});
	
	let result = await myResponse.json();
    let output = JSON.stringify(result)
    console.log(output)
	
	if (output == '"Incomplete"') {
		document.getElementById('error').innerHTML = "This employee ID is already on record!";
	} else {
		window.location.replace('entryComplete.html');
	}
}