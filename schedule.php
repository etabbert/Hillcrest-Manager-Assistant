<?php
function findEmployee($start, $timeStart, $stop, $timeStop) {
	$db = new SQLite3('db/employees.db');
	$db->exec('BEGIN EXCLUSIVE;');
	error_log($start, $timeStart, $stop, $timeStop);
	$readDB = $db->query("SELECT firstname, lastname, $start, $stop, checker, role FROM employees WHERE $timeStart BETWEEN $start AND $stop-1 OR $start BETWEEN $timeStart AND $timeStop-1");
	#$backHalf = $db->query("SELECT firstname,lastname,$start,$stop FROM employees WHERE $start <= $timeStart AND $stop <= $timeStop");
	//$backHalf = $db->query("SELECT firstname,lastname,$start,$stop FROM employees WHERE $start >= $timeStart AND $stop < $timeStart");
	$readResult = [];
	while($row=$readDB->fetchArray(SQLITE3_ASSOC)){
		$readResult = array_merge_recursive($readResult, $row);
	}
	/*while($row=$backHalf->fetchArray(SQLITE3_ASSOC)){
		$readResult = array_merge_recursive($readResult, $row);
	}*/
	$db->exec('END;');
	$db->close();
	return $readResult;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$postData = file_get_contents('php://input');
    $postDecoded = json_decode($postData);
	$start = $postDecoded->start;
	$stop = $postDecoded->stop;
	$timeStart = $postDecoded->timeStart;
	$timeStop = $postDecoded->timeStop;
	
    //error_log("Server received start and stop: " . $start . "\n");
    $result = findEmployee($start, $timeStart, $stop, $timeStop);

    $jsonToSend = json_encode($result);
    error_log("Server sending response: " . $jsonToSend);
    echo $jsonToSend;
}

?>