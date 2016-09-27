<?php
	require_once('http.php');
	require_once('authen.php');
	
	$ftp_server = "54.244.68.78";
	$ftp_username = "relax";
	$fpt_password = "Abcd1234";
	$fpt_path = "/".$_GET['path'];
	
	$ftp_conn = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");
	$login = ftp_login($ftp_conn, $ftp_username, $fpt_password);

	if(!ftp_chdir($ftp_conn, $fpt_path)){
		bad_request ("Forder not found");
	}

	$response = [];
	
	$file_list = ftp_nlist($ftp_conn, ".");
	
	foreach($file_list as $f){
		$f = trim($f);
		$obj = [];
		
		$obj['name'] = $f;
		$obj['file'] = false;
		
		if(strlen($f)>5 && ($f[strlen($f) - 4] == '.' || $f[strlen($f) - 5] == '.')){
			$obj['file'] = true;
		}
		
		array_push($response,(object) $obj);
	}
	
	echo json_encode($response);
	
	ftp_close($ftp_conn);
?>