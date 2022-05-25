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
	studentidClean = ('' + studentidInput).replace(/\D/g, '');
	if (studentidClean.length == 9) {
		document.getElementById('error').innerHTML = "";
		studentid = studentidClean;
	} else {
		document.getElementById('error').innerHTML = "Please enter a 9 digit student ID starting with 8";
	}
	
	inputPhone = document.getElementById('phone').value;
	phoneClean = ('' + inputPhone).replace(/\D/g, '');
	if (phoneClean.length == 10) {
		phone = phoneClean;
	} else {
		document.getElementById('error').innerHTML = "Please enter a 10 digit phone number";
	}

	
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
	
	
	if (document.getElementById('mondayStart').value) {
		mondayStartInput = document.getElementById('mondayStart').value;
		var mondayStartClean = ('' + mondayStartInput).replace(/\D/g, '');
		var mondayStart = setStart(mondayStartClean);
	} else {
		mondayStart = null;
	}
	
	if (document.getElementById('mondayStop').value) {
		mondayStopInput = document.getElementById('mondayStop').value;
		var mondayStopClean = ('' + mondayStopInput).replace(/\D/g, '');
		var mondayStop = parseInt(setStop(mondayStopClean), 10);
	} else {
		mondayStop = null;
	}
	
	if (document.getElementById('tuesdayStart').value) {
		tuesdayStartInput = document.getElementById('tuesdayStart').value;
		var tuesdayStartClean = ('' + tuesdayStartInput).replace(/\D/g, '');
		var tuesdayStart = setStart(tuesdayStartClean);
	} else {
		tuesdayStart = null;
	}
	
	if (document.getElementById('tuesdayStop').value) {
		tuesdayStopInput = document.getElementById('tuesdayStop').value;
		tuesdayStopClean = ('' + tuesdayStopInput).replace(/\D/g, '');
		tuesdayStop = setStop(tuesdayStopClean);
	} else {
		tuesdayStop = null;
	}
	
	if (document.getElementById('wednesdayStart').value) {
		wednesdayStartInput = document.getElementById('wednesdayStart').value;
		var wednesdayStartClean = ('' + wednesdayStartInput).replace(/\D/g, '');
		var wednesdayStart = setStart(wednesdayStartClean);
	} else {
		wednesdayStart = null;
	}
	
	if (document.getElementById('wednesdayStop').value) {
		wednesdayStopInput = document.getElementById('wednesdayStop').value;
		var wednesdayStopClean = ('' + wednesdayStopInput).replace(/\D/g, '');
		var wednesdayStop = setStop(wednesdayStopClean);
	} else {
		wednesdayStop = null;
	}
	
	if (document.getElementById('thursdayStart').value) {
		thursdayStartInput = document.getElementById('thursdayStart').value;
		var thursdayStartClean = ('' + thursdayStartInput).replace(/\D/g, '');
		var thursdayStart = setStart(thursdayStartClean);
	} else {
		thursdayStart = null;
	}
	
	if (document.getElementById('thursdayStop').value) {
		thursdayStopInput = document.getElementById('thursdayStop').value;
		var thursdayStopClean = ('' + thursdayStopInput).replace(/\D/g, '');
		var thursdayStop = setStop(thursdayStopClean);
	} else {
		thursdayStop = null;
	}

	if (document.getElementById('fridayStart').value) {
		fridayStartInput = document.getElementById('fridayStart').value;
		var fridayStartClean = ('' + fridayStartInput).replace(/\D/g, '');
		var fridayStart = setStart(fridayStartClean);
	} else {
		fridayStart = null;
	}
	
	if (document.getElementById('fridayStop').value) {	
		fridayStopInput = document.getElementById('fridayStop').value;
		var fridayStopClean = ('' + fridayStopInput).replace(/\D/g, '');
		var fridayStop = setStop(fridayStopClean);
	} else {
		fridayStop = null;
	}
	
	if (document.getElementById('saturdayStart').value) {
		saturdayStartInput = document.getElementById('saturdayStart').value;
		var saturdayStartClean = ('' + saturdayStartInput).replace(/\D/g, '');
		var saturdayStart = setStart(saturdayStartClean);
	} else {
		saturdayStart = null;
	}
	
	if (document.getElementById('saturdayStop').value) {
		saturdayStopInput = document.getElementById('saturdayStop').value;
		var saturdayStopClean = ('' + saturdayStopInput).replace(/\D/g, '');
		var saturdayStop = setStop(saturdayStopClean);
	} else {
		saturdayStop = null;
	}
	
	if (document.getElementById('sundayStart').value) {	
		sundayStartInput = document.getElementById('sundayStart').value;
		var sundayStartClean = ('' + sundayStartInput).replace(/\D/g, '');
		var sundayStart = setStart(sundayStartClean);
	} else {
		sundayStart = null;
	}
	
	if (document.getElementById('sundayStop').value) {
		sundayStopInput = document.getElementById('sundayStop').value;
		var sundayStopClean = ('' + sundayStopInput).replace(/\D/g, '');	
		var sundayStop = setStop(sundayStopClean);
	} else {
		sundayStop = null;
	}
	
	
	
	var myResponse = await fetch("newemployee.php", {
		method: 'POST',
		headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({firstname: firstname, lastname: lastname, studentid: studentid, phone: phone, email: email, checker: checker, role: role, mondayStart: mondayStart, mondayStop: mondayStop, tuesdayStart: tuesdayStart, tuesdayStop: tuesdayStop, wednesdayStart: wednesdayStart, wednesdayStop: wednesdayStop, thursdayStart: thursdayStart, thursdayStop: thursdayStop, fridayStart: fridayStart, fridayStop: fridayStop, saturdayStart: saturdayStart, saturdayStop: saturdayStop, sundayStart: sundayStart, sundayStop: sundayStop})
	});
	
	var result = await myResponse.json();
    var output = JSON.stringify(result);
    console.log(output)
	
	if (output == '"Incomplete"') {
		document.getElementById('error').innerHTML = "This employee ID is already on record!";
	} else {
		window.location.replace('entryComplete.html');
	}
}

function setStart(start) {
	if (parseInt(start) < 600) {
		return '600';
	} else {
		return start;
	}
}

function setStop(stop) {
	if (parseInt(stop) > 2000) {
		return '2000';
	} else {
		return stop;
	}
}

function test() {
	if (document.getElementById('mondayStart').value) {
		mondayStartInput = document.getElementById('mondayStart').value;
		console.log(mondayStartInput);
		var mondayStartClean = ('' + mondayStartInput).replace(/\D/g, '');
		console.log(mondayStartClean);
		var mondayStart = setStart(mondayStartClean);
		console.log(mondayStart);
	} else {
		mondayStart = null;
	}
}