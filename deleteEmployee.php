<?php
function deleteEmployee($studentid) {
	$db = new SQLite3('db/employees.db');
	$db->exec('BEGIN EXCLUSIVE;');
	
	$deleteUser = "DELETE FROM employees WHERE studentid = '$studentid'";
	$db->exec($deleteUser);
	$db->exec('END;');
	$db->close();
	return "Complete";
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$postData = file_get_contents('php://input');
    $postDecoded = json_decode($postData);
	$studentid = $postDecoded->studentid;
    error_log("Server received student ID: " . $studentid . "\n");

    $result = deleteEmployee($studentid);

    $jsonToSend = json_encode($result);
    error_log("Server sending response: " . $jsonToSend);
    echo $jsonToSend;
}

?>