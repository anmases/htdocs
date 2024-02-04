<?php
//endpoint para las estaciones
include 'src/services/estacionService.php';
include 'src/controller.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
$service = new EstacionService();
Controller::handleRequest($service);

?>