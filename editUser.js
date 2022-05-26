window.onload = editUser();

function gup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
} 

const capitalize = (str) => {
    if(typeof str === 'string') {
        return str.replace(/^\w/, c => c.toUpperCase());
    } else {
        return '';
    }
};

async function editUser() {
	var studentid = gup("ID");
	
	let myResponse = await fetch("getUser.php", {
	method: 'POST',
	headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
	body: JSON.stringify({studentid: studentid})
	});
	
	let result = await myResponse.json();
    let output = JSON.stringify(result);
	
	phone1 = String(result.phone).slice(0,3);
	phone2 = String(result.phone).slice(3,6);
	phone3 = String(result.phone).slice(6,10);
	phoneFormat = '(' + phone1 + ')' + phone2 + '-' + phone3;
	
	document.getElementById("firstnameText").innerHTML = result.firstname + " " + result.lastname + "</br></br>";
	document.getElementById("studentidText").innerHTML = "Student ID: " + result.studentid + "</br></br>";
	document.getElementById("phoneText").innerHTML = phoneFormat + "</br></br>";
	document.getElementById("emailText").innerHTML = result.email + "</br></br>";
	if (result.checker){document.getElementById("checkerText").innerHTML = "Checker Certified: Yes" + "</br></br>";} else {document.getElementById("checkerText").innerHTML = "Checker Certified: No" + "</br></br>";}
	document.getElementById("roleText").innerHTML = "Role: " + capitalize(result.role) + "</br></br>";
	if (result.mondayStart){document.getElementById("mondayStartText").innerHTML = "Monday</br>Start: " + String(result.mondayStart);}
	if (result.mondayStop){document.getElementById("mondayStopText").innerHTML = "Stop: " + String(result.mondayStop) + "</br></br>";}
	if (result.tuesdayStart){document.getElementById("tuesdayStartText").innerHTML = "Tuesday</br>Start: " + String(result.tuesdayStart);}
	if (result.tuesdayStop){document.getElementById("tuesdayStopText").innerHTML = "Stop: " + String(result.tuesdayStop) + "</br></br>";}
	if (result.wednesdayStart){document.getElementById("wednesdayStartText").innerHTML = "Wednesday</br>Start: " + String(result.wednesdayStart);}
	if (result.wednesdayStop){document.getElementById("wednesdayStopText").innerHTML = "Stop: " + String(result.wednesdayStop) + "</br></br>";}
	if (result.thursdayStart){document.getElementById("thursdayStartText").innerHTML = "Thursday</br>Start: " + String(result.thursdayStart);}
	if (result.thursdayStop){document.getElementById("thursdayStopText").innerHTML = "Stop: " + String(result.thursdayStop) + "</br></br>";}
	if (result.fridayStart){document.getElementById("fridayStartText").innerHTML = "Friday</br>Start: " + String(result.fridayStart);}
	if (result.fridayStop){document.getElementById("fridayStopText").innerHTML = "Stop: " + String(result.fridayStop) + "</br></br>";}
	if (result.saturdayStart){document.getElementById("saturdayStartText").innerHTML = "Saturday</br>Start: " + String(result.saturdayStart);}
	if (result.saturdayStop){document.getElementById("saturdayStopText").innerHTML = "Stop: " + String(result.saturdayStop) + "</br></br>";}
	if (result.sundayStart){document.getElementById("sundayStartText").innerHTML = "Sunday</br>Start: " + String(result.sundayStart);}
	if (result.sundayStop){document.getElementById("sundayStopText").innerHTML = "Stop: " + String(result.sundayStop) + "</br></br>";}
}

async function applyEdits() {
	
	var studentid = gup("ID");

	if (document.getElementById('firstname').value) {
		firstname = document.getElementById('firstname').value;
	} else {
		firstname = null;
	}

	if (document.getElementById('lastname').value) {
		lastname = document.getElementById('lastname').value;
	} else {
		lastname = null;
	}

	if (document.getElementById('phone').value) {
		inputPhone = document.getElementById('phone').value;
		phoneClean = ('' + inputPhone).replace(/\D/g, '');
		if (phoneClean.length == 10) {
			phone = phoneClean;
		} else {
			document.getElementById('error').innerHTML = "Please enter a 10 digit phone number";
		}
	} else {
		phone = null;
	}

	
	if (document.getElementById('email').value) {
		email = document.getElementById('email').value;
	} else {
		email = null;
	}
	
	if (document.querySelector('input[name="checker"]:checked')) {
		checker = true;
	} else {
		checker = null;
	}
	
	if (document.querySelector('input[name="role"]:checked')) {
		role = document.querySelector('input[name="role"]:checked').value;
	} else {
		role = null;
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
	
	let myResponse = await fetch("editUser.php", {
	method: 'POST',
	headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
	body: JSON.stringify({firstname: firstname, lastname: lastname, studentid: studentid, phone: phone, email: email, checker: checker, role: role, mondayStart: mondayStart, mondayStop: mondayStop, tuesdayStart: tuesdayStart, tuesdayStop: tuesdayStop, wednesdayStart: wednesdayStart, wednesdayStop: wednesdayStop, thursdayStart: thursdayStart, thursdayStop: thursdayStop, fridayStart: fridayStart, fridayStop: fridayStop, saturdayStart: saturdayStart, saturdayStop: saturdayStop, sundayStart: sundayStart, sundayStop: sundayStop})
	});
	
	let result = await myResponse.json();
    let output = JSON.stringify(result);
	console.log(result);
	
	if (result == "Complete") {
		editUser();
		document.getElementById('status').innerHTML = "Changes submitted successfully!</br></br>";
		window.scrollTo(0, 0);
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