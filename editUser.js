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