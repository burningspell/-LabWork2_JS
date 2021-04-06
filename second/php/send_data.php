<?php
	
	$name = $_POST['name'];
	$date = $_POST['date'];
	$email = $_POST['email'];
	$sex = $_POST['sex'];
	$text = $_POST['text'];

	$sXML = simplexml_load_file('../comments.xml'); // загрузка в XML
	$newchild = $sXML->addChild("comment");
	$newchild->addChild("name", $name);
	$newchild->addChild("email", $email);
	$newchild->addChild("date", $date);
	$newchild->addChild("sex", $sex);
	$newchild->addChild("text", $text);
	file_put_contents('../comments.xml', $sXML->asXML());

?>