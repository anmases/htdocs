<?php
//endpoint para los trenes
include 'src/services/trenService.php';
include 'src/controller.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
$service = new TrenService();
Controller::handleRequest($service);

?>