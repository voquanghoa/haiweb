<?php
	defined('__API__') or die('Can not call directly!');
	
	include "notorm/NotORM.php";
	function getPDO(){
		$pdo = new PDO("mysql:dbname=hai;host=127.0.0.1", 'root', '');
		return new NotORM($pdo);
	}
	
?>