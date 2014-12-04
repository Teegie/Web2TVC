<!DOCTYPE html>
<html>
<head>
	<title>CAST</title>
	<link rel="stylesheet" href="./dash.css"/>
</head>
<body>
	<?php
	$var = $_GET['url'];
	$file = exec("/usr/local/Cellar/phantomjs/1.9.8/bin/phantomjs dash.js {$var}");
	echo "<img src=Libpictures/{$file}>";
	?>
</body>
</html>
