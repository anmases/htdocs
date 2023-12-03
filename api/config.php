<?php
$con = new mysqli("localhost:3306", "root", "53633393S", "ferrocarril");
if ($con->connect_error) {
    die("Conexión fallida: " . $con->connect_error);
}
?>