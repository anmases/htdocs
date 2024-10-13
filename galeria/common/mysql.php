<?php
	function connect($config = array()){
		$connection = mysqli_connect($config['host'], $config['username'], $config['password'], $config['db']);
		mysqli_set_charset($connection, $config['encoding']);
		return ($connection);
	}

	function execute($connection, $sql){
		$ret = mysqli_query($connection, $sql);
		return ($ret);
	}

	function executeQuery($connection, $sql){
		$result = mysqli_query($connection, $sql);
		if ($result === false) {
			die("Error en la consulta: " . mysqli_error($connection));
		}
		$data = [];
		while ($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
			$data[] = $row;
		}

		mysqli_free_result($result);
		return !empty($data) ? $data : null;
	} 

	function close($connection){
		mysqli_close($connection);
		unset($connection);
	}
	$_
?>