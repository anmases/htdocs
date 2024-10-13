<?php
	include dirname( dirname( dirname( __FILE__))) . "\\common\\config.php";
	include dirname( dirname( dirname( __FILE__))) . "\\common\\mysql.php";
	include dirname( dirname( dirname( __FILE__))) . "\\common\\utils.php";

	$id = $_POST["id"];
	$user_id = $_POST["user_id"];
	$name = $_POST["name"];
	$text = $_POST["text"];

	$connection = connect($config["database"]);
	if(isset($_POST["enabled"])){
		$enabled = 1;
	}else{
		$enabled = 0;
	}

	$fichero = $_FILES["fichero"]["name"];
	$size = $_FILES["fichero"]["size"];
	if($fichero != ""){
		move_uploaded_file($_FILES["fichero"]["tmp_name"], "../../images/".$fichero);
		$sql = "UPDATE images SET user_id=".$user_id.", name='".$name."', text='".$text."', file='".$fichero."', size=".$size.", enabled=".$enabled." WHERE id=".$id;
		var_dump($sql);
	}else{
		$sql = "UPDATE images SET user_id=".$user_id.", name='".$name."', text='".$text."', enabled=".$enabled." WHERE id=".$id;
		var_dump($sql);
	}
	$return = execute($connection, $sql);
	
	close($connection);

	header("location: ../home.php?page=listado");
?>