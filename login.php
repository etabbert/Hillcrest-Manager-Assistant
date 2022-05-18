<?php
function loginCheck($username, $pwhash) {
	$db = new SQLite3('db/login.db');
	$db->exec('BEGIN EXCLUSIVE;');
	$checkdb = "SELECT username FROM login WHERE username == '$username'";
	$verifyUser = $db->querySingle($checkdb, false);
	if ($verifyUser == null){
		$result = array('info' => null);
		return $result;
	} else {
		$verifyHash = "SELECT pwhash FROM login WHERE username == '$username'";
		$pwcheck = $db->querySingle($verifyHash, false);
		error_log($pwcheck);
		error_log($pwhash);
		if ($pwcheck == $pwhash){
			$result = array('info' => true);
		} else {
			$result = array('info' => false);
		}
	}
	$db->exec('END;');
    $db->close();
    return $result;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = file_get_contents('php://input');
    $postDecoded = json_decode($postData);
    $username = $postDecoded->username;
	$pwhash = $postDecoded->pwhash;
    error_log("Server received username: " . $username . "\n");

    $loginResult = loginCheck($username, $pwhash);

    $jsonToSend = json_encode($loginResult);
    error_log("Server sending response: " . $jsonToSend);
    echo $jsonToSend;
}

?>