<?php
function queryEmployee($lastname) {
	$db = new SQLite3('db/employees.db');
	$db->exec('BEGIN EXCLUSIVE;');
	error_log($lastname);
	$readDB = $db->query("SELECT * FROM employees WHERE LOWER(lastname) = LOWER('$lastname')");
	$readResult = [];
	while($row=$readDB->fetchArray(SQLITE3_ASSOC)){
		$readResult = array_merge_recursive($readResult, $row);
	}
	
	$db->exec('END;');
	$db->close();
	return $readResult;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$postData = file_get_contents('php://input');
    $postDecoded = json_decode($postData);
	$lastname = $postDecoded->lastname;
    error_log("Server received lastname: " . $lastname . "\n");

    $result = queryEmployee($lastname);

    $jsonToSend = json_encode($result);
    error_log("Server sending response: " . $jsonToSend);
    echo $jsonToSend;
}

?>