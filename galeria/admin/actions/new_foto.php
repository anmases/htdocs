<?php
		include dirname( dirname( dirname( __FILE__))) . "\\common\\config.php";
		include dirname( dirname( dirname( __FILE__))) . "\\common\\mysql.php";
		include dirname( dirname( dirname( __FILE__))) . "\\common\\utils.php";

		debug($_POST);

		$user_id = $_POST["user_id"];
		$name = $_POST["name"];
		$text = $_POST["text"];
		if(isset($_POST["enabled"])){
			$enabled = 1;
		}else{
			$enabled = 0;
		}
		$fichero = $_FILES["fichero"]["name"];
		$size = $_FILES["fichero"]["size"];
		move_uploaded_file($_FILES["fichero"]["tmp_name"], "../../images/".$fichero);
		$now = date("Y-m-d H:i:s");

		$connection = connect($config["database"]);
		$sql = "INSERT INTO images (user_id, name, file, size, text, enabled, created) 
		VALUES ($user_id, '$name', '$fichero', $size, '$text', $enabled, '$now')";
		$ret = execute($connection, $sql);
		close($connection);

		header("location: ../home.php?page=listado");
?>