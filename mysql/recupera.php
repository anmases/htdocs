<?php
$host = "localhost:3306";
$user = "root";
$password = "53633393S";
$bd = "pruebaPhp";

    $nombre = $_POST['name'];
    $id = $_POST['id'];
    $conexion = mysqli_connect($host, $user, $password) or die("error de conexión");
    mysqli_select_db($conexion, $bd);
    $sentencia = "SELECT * FROM clientes";
    $registros = mysqli_query($conexion, $sentencia);
		/* Devuelve un dataset con el contenido.
		* mysqli_fetch_array($registros, MYSQLI_NUM);  //devuelve array con índice numérico
		*	mysqli_fetch_array($registros, MYSQLI_ASSOC);  //devuelve array asociativo con nombre del campo
		*	mysqli_fetch_array($registros, MYSQLI_BOTH);  //devuelve array asociativo con nombre del campo e índice
		*/
    while($tupla = mysqli_fetch_row($registros)){
        echo "id: ".$tupla[0];
        echo "<br>";
        echo "nombre: ".$tupla[1];
        echo "<br>";

        if($tupla[0] == $id){
            $encontrado = true;
        }else{
            $encontrado = false;
        }
    }

    if($encontrado == true){
        echo $nombre. " se encuentra en la base de datos";
    }else{
        echo $nombre. " NO se encuentra en la base de datos";
    }

		mysqli_close($conexion);
?>