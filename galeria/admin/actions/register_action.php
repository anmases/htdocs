<?php
	include "../../common/utils.php";
	include "../../common/mysql.php";
	include "../../common/config.php";

	$username = $_POST["username"];
	$email = $_POST["email"];
	$password = $_POST["password"];
	$repated_password = $_POST["password"];
	$now = date("Y-m-d H:i:s");

	if($password != $repated_password){
		return;
	}

	$hash = password_hash($password, PASSWORD_BCRYPT);

	$connection = connect($config["database"]);
	$sql = "INSERT INTO users (name, email, password, enabled, created) 
	VALUES ('$username', '$email', '$hash', true, '$now')
	";
	$ret = execute($connection, $sql);

	close($connection);

	//Redirección
	header("location: ../home.php");
	
?>