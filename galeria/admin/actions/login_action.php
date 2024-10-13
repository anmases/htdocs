<?php
	include "../../common/utils.php";
	include "../../common/mysql.php";
	include "../../common/config.php";

	debug($_POST);

	$email = $_POST["username"];
	$password = $_POST["password"];

	$connection = connect($config["database"]);
	$sql = "SELECT * FROM users WHERE email = '$email'";

	$rows = executeQuery($connection, $sql);

	close($connection);

	if(empty($rows)){
		header("location: ../error.php");
	}elseif(password_verify($password, $rows[0]['password'])){
		session_start();
		$_SESSION["id"] = $rows[0]['id'];
		$_SESSION["email"] = $rows[0]['email'];
		$_SESSION["session_id"] = session_id();
		header("location: ../home.php?page=listado");
	}
	
?>