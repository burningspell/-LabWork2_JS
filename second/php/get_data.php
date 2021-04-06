<?php
	$url = '../comments.xml';
	$file = file_get_contents($url);
	$xml = simplexml_load_string($file);
	$send = array();
	$i=0;
	foreach ($xml as $comment) {
		$send[$i] = $comment;
		$i++;
	}

	echo json_encode($send);
?>