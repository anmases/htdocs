<?php
	include dirname( dirname( dirname( __FILE__))) . "\\common\\config.php";
	include dirname( dirname( dirname( __FILE__))) . "\\common\\mysql.php";
	include dirname( dirname( dirname( __FILE__))) . "\\common\\utils.php";

	$page = $_GET['page'];

	$connection = connect($config["database"]);
	if($page == "listado"){
		$sql = "DELETE FROM images WHERE id=".$_GET['id'];
	}else{
		$sql = "DELETE FROM users WHERE id=".$_GET['id'];
	}
	
	$return = execute($connection, $sql);
	close($connection);

	header("location: ../home.php?page=".$page);
?>