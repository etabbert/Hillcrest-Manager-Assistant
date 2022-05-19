<?php
function writeEmployee($firstname, $lastname, $studentid, $phone, $email, $checker, $role, $mondayStart, $mondayStop, $tuesdayStart, $tuesdayStop, $wednesdayStart, $wednesdayStop, $thursdayStart, $thursdayStop, $fridayStart, $fridayStop, $saturdayStart, $saturdayStop, $sundayStart, $sundayStop) {
	$db = new SQLite3('db/employees.db');
	$db->exec('BEGIN EXCLUSIVE;');
	error_log($firstname);
	$writeDB = "INSERT INTO employees (firstname, lastname, studentid, phone, email, checker, role, mondayStart, mondayStop, tuesdayStart, tuesdayStop, wednesdayStart, wednesdayStop, thursdayStart, thursdayStop, fridayStart, fridayStop, saturdayStart, saturdayStop, sundayStart, sundayStop) values ('$firstname', '$lastname', '$studentid', '$phone', '$email', '$checker', '$role', '$mondayStart', '$mondayStop', '$tuesdayStart', '$tuesdayStop', '$wednesdayStart', '$wednesdayStop', '$thursdayStart', '$thursdayStop', '$fridayStart', '$fridayStop', '$saturdayStart', '$saturdayStop', '$sundayStart', '$sundayStop')";
	$db->exec($writeDB);
	$db->exec('END;');
	return $firstname;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$postData = file_get_contents('php://input');
    $postDecoded = json_decode($postData);
    $firstname = $postDecoded->firstname;
	$lastname = $postDecoded->lastname;
	$studentid = $postDecoded->studentid;
	$phone = $postDecoded->phone;
	$email = $postDecoded->email;
	$checker = $postDecoded->checker;
	$role = $postDecoded->role;
	$mondayStart = $postDecoded->mondayStart;
	$mondayStop = $postDecoded->mondayStop;
	$tuesdayStart = $postDecoded->tuesdayStart;
	$tuesdayStop = $postDecoded->tuesdayStop;
	$wednesdayStart = $postDecoded->wednesdayStart;
	$wednesdayStop = $postDecoded->wednesdayStop;
	$thursdayStart = $postDecoded->thursdayStart;
	$thursdayStop = $postDecoded->thursdayStop;
	$fridayStart = $postDecoded->fridayStart;
	$fridayStop = $postDecoded->fridayStop;
	$saturdayStart = $postDecoded->saturdayStart;
	$saturdayStop = $postDecoded->saturdayStop;
	$sundayStart = $postDecoded->sundayStart;
	$sundayStop = $postDecoded->sundayStop;
    error_log("Server received username: " . $firstname . "\n");

    $result = writeEmployee($firstname, $lastname, $studentid, $phone, $email, $checker, $role, $mondayStart, $mondayStop, $tuesdayStart, $tuesdayStop, $wednesdayStart, $wednesdayStop, $thursdayStart, $thursdayStop, $fridayStart, $fridayStop, $saturdayStart, $saturdayStop, $sundayStart, $sundayStop);

    $jsonToSend = json_encode($result);
    error_log("Server sending response: " . $jsonToSend);
    echo $jsonToSend;
}

?>