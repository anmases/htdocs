<?php
	include dirname( dirname( dirname( __FILE__))) . "\\common\\config.php";
	include dirname( dirname( dirname( __FILE__))) . "\\common\\mysql.php";
	include dirname( dirname( dirname( __FILE__))) . "\\common\\utils.php";

	$connection = connect($config["database"]);
	$sql = "SELECT a.*, b.name as autor FROM images as a
	INNER JOIN users AS b ON a.user_id = b.id
	ORDER BY a.id DESC
	";
	$rows = execute($connection, $sql);
	close($connection);
?>