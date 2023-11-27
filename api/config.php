<?php
$con = new mysqli("localhost:3306", "root", "0385", "ferrocarril");
if ($con->connect_error) {
    die("Conexión fallida: " . $con->connect_error);
}
?>