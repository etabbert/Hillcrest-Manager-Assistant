<?php
function applyUserEdits($firstname, $lastname, $studentid, $phone, $email, $checker, $role, $mondayStart, $mondayStop, $tuesdayStart, $tuesdayStop, $wednesdayStart, $wednesdayStop, $thursdayStart, $thursdayStop, $fridayStart, $fridayStop, $saturdayStart, $saturdayStop, $sundayStart, $sundayStop) {
	$db = new SQLite3('db/employees.db');
	$db->exec('BEGIN EXCLUSIVE;');

	$updateFirstname = "UPDATE employees SET firstname = '$firstname' WHERE studentid = '$studentid'";
	$updateLastname = "UPDATE employees SET lastname = '$lastname' WHERE studentid = '$studentid'";
	$updateStudentid = "UPDATE employees SET studentid = '$studentid' WHERE studentid = '$studentid'";
	$updatePhone = "UPDATE employees SET phone = '$phone' WHERE studentid = '$studentid'";
	$updateEmail = "UPDATE employees SET email = '$email' WHERE studentid = '$studentid'";
	$updateChecker = "UPDATE employees SET checker = '$checker' WHERE studentid = '$studentid'";
	$updateRole = "UPDATE employees SET role = '$role' WHERE studentid = '$studentid'";
	$updateMondayStart = "UPDATE employees SET mondayStart = '$mondayStart' WHERE studentid = '$studentid'";
	$updateMondayStop = "UPDATE employees SET mondayStop = '$mondayStop' WHERE studentid = '$studentid'";
	$updateTuesdayStart = "UPDATE employees SET tuesdayStart = '$tuesdayStart' WHERE studentid = '$studentid'";
	$updateTuesdayStop = "UPDATE employees SET tuesdayStop = '$tuesdayStop' WHERE studentid = '$studentid'";
	$updateWednesdayStart = "UPDATE employees SET wednesdayStart = '$wednesdayStart' WHERE studentid = '$studentid'";
	$updateWednesdayStop = "UPDATE employees SET wednesdayStop = '$wednesdayStop' WHERE studentid = '$studentid'";
	$updateThursdayStart = "UPDATE employees SET thursdayStart = '$thursdayStart' WHERE studentid = '$studentid'";
	$updateThursdayStop = "UPDATE employees SET thursdayStop = '$thursdayStop' WHERE studentid = '$studentid'";
	$updateFridayStart = "UPDATE employees SET fridayStart = '$fridayStart' WHERE studentid = '$studentid'";
	$updateFridayStop = "UPDATE employees SET fridayStop = '$fridayStop' WHERE studentid = '$studentid'";
	$updateSaturdayStart = "UPDATE employees SET saturdayStart = '$saturdayStart' WHERE studentid = '$studentid'";
	$updateSaturdayStop = "UPDATE employees SET saturdayStop = '$saturdayStop' WHERE studentid = '$studentid'";
	$updateSundayStart = "UPDATE employees SET sundayStart = '$sundayStart' WHERE studentid = '$studentid'";
	$updateSundayStop = "UPDATE employees SET sundayStop = '$sundayStop' WHERE studentid = '$studentid'";
	
	if ($firstname != null) {
		$db->exec($updateFirstname);
	}
	if ($lastname != null) {
		$db->exec($updateLastname);
	}
	if ($studentid != null) {
		$db->exec($updateStudentid);
	}
	if ($phone != null) {
		$db->exec($updatePhone);
	}
	if ($email != null) {
		$db->exec($updateEmail);
	}
	if ($checker != null) {
		$db->exec($updateChecker);
	}
	if ($role != null) {
		$db->exec($updateRole);
	}
	if ($mondayStart != null) {
		$db->exec($updateMondayStart);
	}
	if ($mondayStop != null) {
		$db->exec($updateMondayStop);
	}
	if ($tuesdayStart != null) {
		$db->exec($updateTuesdayStart);
	}
	if ($tuesdayStop != null) {
		$db->exec($updateTuesdayStop);
	}
	if ($wednesdayStart != null) {
		$db->exec($updateWednesdayStart);
	}
	if ($wednesdayStop != null) {
		$db->exec($updateWednesdayStop);
	}
	if ($thursdayStart != null) {
		$db->exec($updateThursdayStart);
	}
	if ($thursdayStop != null) {
		$db->exec($updateThursdayStop);
	}
	if ($fridayStart != null) {
		$db->exec($updateFridayStart);
	}
	if ($fridayStop != null) {
		$db->exec($updateFridayStop);
	}
	if ($saturdayStart != null) {
		$db->exec($updateSaturdayStart);
	}
	if ($saturdayStop != null) {
		$db->exec($updateSaturdayStop);
	}
	if ($sundayStart != null) {
		$db->exec($updateSundayStart);
	}
	if ($sundayStop != null) {
		$db->exec($updateSundayStop);
	}
	
	$db->exec('END;');
	$db->close();
	return "Complete";
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
    error_log("Server received student ID: " . $studentid . "\n");

    $result = applyUserEdits($firstname, $lastname, $studentid, $phone, $email, $checker, $role, $mondayStart, $mondayStop, $tuesdayStart, $tuesdayStop, $wednesdayStart, $wednesdayStop, $thursdayStart, $thursdayStop, $fridayStart, $fridayStop, $saturdayStart, $saturdayStop, $sundayStart, $sundayStop);

    $jsonToSend = json_encode($result);
    error_log("Server sending response: " . $jsonToSend);
    echo $jsonToSend;
}

?>