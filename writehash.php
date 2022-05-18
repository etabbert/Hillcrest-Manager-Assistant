<?php
function writeHash($username, $pwhash) {
	$db = new SQLite3('db/login.db');
	$db->exec('BEGIN EXCLUSIVE;');
	error_log($username);
	$writeDBhash = "INSERT INTO login (username, pwhash, isadmin) values ('$username', '$pwhash', 1)";
	$db->exec($writeDBhash);
	$db->exec('END;');
	return $username;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$postData = file_get_contents('php://input');
    $postDecoded = json_decode($postData);
    $username = $postDecoded->username;
	$pwhash = $postDecoded->pwhash;
    error_log("Server received username: " . $username . "\n");

    $loginResult = writeHash($username, $pwhash);

    $jsonToSend = json_encode($loginResult);
    error_log("Server sending response: " . $jsonToSend);
    echo $jsonToSend;
}
?>