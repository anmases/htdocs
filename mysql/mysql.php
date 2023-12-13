<?php
$host = "localhost:3306";
$user = "root";
$password = "53633393S";
//podemos usar un enfoque OO instanciando mysqli o un enfoque funcional, con estos métodos:
$conection = mysqli_connect($host, $user, $password);

if(!$conection) {echo "Conexión fallida";}
else{
    $sentencia = "CREATE DATABASE pruebaPhp";
    $sentencia2 = "CREATE TABLE clientes(
        id INT PRIMARY KEY,
        nombre VARCHAR(50)
    )";
    if(mysqli_query($conection, $sentencia)){
        echo "base de datos creada con éxito";
    }else{
        echo "ERROR: ".mysqli_error($conection);
    }

    mysqli_select_db($conection, "pruebaPhp");

    if(mysqli_query($conection, $sentencia2)){
        echo "tabla clientes creada con éxito";
    }else{
        echo "ERROR: ".mysqli_error($conection);
    }



}
?>