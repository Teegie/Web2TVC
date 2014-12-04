<?php
	if ($_GET['width'] == "" && $_GET['height'] == "")
		$url = $_GET['url'];
	else
	{
		if ($_GET["height"] == "")
			$url = $_GET['url'] . "?" . $_GET['width']  . "x720";
		else if ($_GET["width"] == "")
			$url = $_GET['url'] . "?1280x" . $_GET['height'];
		else
			$url = $_GET['url'] . "?" . $_GET['width'] . "x" . $_GET['height'];
	}
	header("Location: cast.php?url=" . $url);
	exit();
?>