<?php
include 'config.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$tabla = $_GET["tabla"];

if ($_SERVER['REQUEST_METHOD'] == 'GET' && ($tabla == 'tren' || $tabla == 'estacion' || $tabla == 'pasajero' || $tabla == 'trayecto' || $tabla == 'empleado' || $tabla == 'mantenimiento')) {
    $result = $con->query("SELECT * FROM ". $tabla);
    $rows = array();
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    echo json_encode(array("message" => "Solo se admiten peticiones GET"));
}
?>