<?php
if (!isset($_SERVER['PHP_AUTH_USER'])) {
    header('WWW-Authenticate: Basic realm="My Realm"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Text to send if user hits Cancel button';
    exit;
} else {
	$user = $_SERVER['PHP_AUTH_USER'];
	$password = $_SERVER['PHP_AUTH_PW'];
	
	if ($user != 'admin' || $password != '123'){
		header('HTTP/1.0 401 Unauthorized');
		echo 'Wrong username or password';
		exit;
	}
	
	echo 'ok';
}
?>