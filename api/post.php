<?php
	define('__API__', '__API__');
	
	require_once("request.php");
	require_once("http.php");
	require_once("db.php");
	
	function addPost($title, $url) {
		getPDO()->post()->insert(array(
			"title" => $title,
			"url" => $url,
			"author" => 1,
		));
	}
	
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$title = $POST->title or bad_request('Title is required');
		$url = $POST->url or bad_request('url is required');
		addPost($title, $url);
		return;
	}
	
	not_allowed();
?>