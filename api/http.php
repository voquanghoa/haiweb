<?php
	function bad_request($message){
		header('HTTP/1.0 400 Bad Request');
		die($message);
	};
	
	function unauthorized(){
		header('HTTP/1.0 401 Unauthorized');
		die('You need to login to perform this action');
	};
	
	function not_allowed(){
		header('HTTP/1.0 405 Method Not Allowed');
		die('Method Not Allowed');
	};
?>