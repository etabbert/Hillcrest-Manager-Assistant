<?php
function findEmployee($studentid) {
	$db = new SQLite3('db/employees.db');
	$db->exec('BEGIN EXCLUSIVE;');
	error_log($studentid);
	$studentQuery = "SELECT * FROM employees WHERE studentid = '$studentid'";
	$getStudent = $db->query($studentQuery);
	$studentResult = $getStudent->fetchArray(SQLITE3_ASSOC);
	$db->exec('END;');
	$db->close();
	return $studentResult;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$postData = file_get_contents('php://input');
    $postDecoded = json_decode($postData);
	$studentid = $postDecoded->studentid;
    error_log("Server received student ID: " . $studentid . "\n");

    $result = editEmployee($studentid);

    $jsonToSend = json_encode($result);
    error_log("Server sending response: " . $jsonToSend);
    echo $jsonToSend;
}

?>