<?php
	$kol = $_POST['kol'];
	$tek = $_POST['tek'];

	$url = '../xml/news.xml';
	$file = file_get_contents($url);
	$xml = simplexml_load_string($file);
	$send = array();

	for($i = $tek;$i<=($tek+$kol-1);$i++)
	$send[$i]  = $xml->news[$i-1+1];

	echo json_encode($send);
?>