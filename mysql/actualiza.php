<?php
  $host = "localhost:3306";
  $user = "root";
  $password = "53633393S";
$nombre = $_POST['name'];
$id = $_POST['seleccionar'];
$conexion = mysqli_connect($host, $user, $password) or die("error de conexión");
mysqli_select_db($conexion,"pruebaPhp");
$sentencia = "UPDATE clientes SET nombre = '$nombre' WHERE id='$id'";
$registros = mysqli_query($conexion, $sentencia);
?>