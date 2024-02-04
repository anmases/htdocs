<?php
//endpoint para los empleados
include 'src/services/empleadoService.php';
include 'src/controller.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
$service = new EmpleadoService();
Controller::handleRequest($service);

?>