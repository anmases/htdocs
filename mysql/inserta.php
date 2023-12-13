<?php
$host = "localhost:3306";
$user = "root";
$password = "53633393S";

    $nombre = $_POST['name'];
    $id = $_POST['id'];
    $conexion = mysqli_connect($host, $user, $password) or die("error de conexión");
    mysqli_select_db($conexion,"pruebaPhp");
    $sentencia = "INSERT INTO clientes (id, nombre) VALUES ('$id', '$nombre')";
    mysqli_query($conexion, $sentencia);
?>