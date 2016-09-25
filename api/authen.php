<?php
	echo "aa";
	define('__API__', '__API__');
	
	if (!isset($_SERVER['PHP_AUTH_USER'])) {
		header('WWW-Authenticate: Basic realm="My Realm"');
		header('HTTP/1.0 401 Unauthorized');
		echo 'You need to login to perform this action';
		exit;
	} 
	
	$user = $_SERVER['PHP_AUTH_USER'];
	$password = $_SERVER['PHP_AUTH_PW'];

	if ($user != 'admin' || $password != '123'){
		header('WWW-Authenticate: Basic realm="My Realm"');
		header('HTTP/1.0 401 Unauthorized');
		echo 'Bad username or password';
		exit;
	}
?>