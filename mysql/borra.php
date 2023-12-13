<?php
$host = "localhost:3306";
$user = "root";
$password = "53633393S";

    $nombre = $_POST['name'];
    $id = $_POST['id'];
    $conexion = mysqli_connect($host, $user, $password) or die("error de conexión");
    mysqli_select_db($conexion,"pruebaPhp");
    $sentencia = "SELECT * FROM clientes";
    $registros = mysqli_query($conexion, $sentencia);
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
        $borrado = "DELETE FROM clientes WHERE id='$id'";
        mysqli_query($conexion, $borrado);
        echo $nombre." ha sido borrado";
    }else{
        echo $nombre. " NO se encuentra en la base de datos";
    }
?>