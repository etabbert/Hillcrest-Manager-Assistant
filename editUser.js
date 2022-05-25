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

async function editUser() {
	var studentid = gup("ID");
	
	let myResponse = await fetch("getUser.php", {
	method: 'POST',
	headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
	body: JSON.stringify({studentid: studentid})
	});
	
	let result = await myResponse.json();
    let output = JSON.stringify(result);
    console.log(result);
	
	document.getElementById("firstnameText").innerHTML = result.firstname + " " + result.lastname;
	document.getElementById("studentidText").innerHTML = result.studentid;
	document.getElementById("phoneText").innerHTML = result.phone;
	document.getElementById("emailText").innerHTML = result.email;
	document.getElementById("checkerText").innerHTML = result.checker;
	document.getElementById("roleText").innerHTML = result.role;
	document.getElementById("mondayStartText").innerHTML = result.mondayStart;
	document.getElementById("mondayStopText").innerHTML = result.mondayStop;
	document.getElementById("tuesdayStartText").innerHTML = result.tuesdayStart;
	document.getElementById("tuesdayStopText").innerHTML = result.tuesdayStop;
	document.getElementById("wednesdayStartText").innerHTML = result.wednesdayStart;
	document.getElementById("wednesdayStopText").innerHTML = result.wednesdayStop;
	document.getElementById("thursdayStartText").innerHTML = result.thursdayStart;
	document.getElementById("thursdayStopText").innerHTML = result.thursdayStop;
	document.getElementById("fridayStartText").innerHTML = result.fridayStart;
	document.getElementById("fridayStopText").innerHTML = result.fridayStop;
	document.getElementById("saturdayStartText").innerHTML = result.saturdayStart;
	document.getElementById("saturdayStopText").innerHTML = result.saturdayStop;
	document.getElementById("sundayStartText").innerHTML = result.sundayStart;
	document.getElementById("sundayStopText").innerHTML = result.sundayStop;
}