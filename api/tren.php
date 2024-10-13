<?php
//endpoint para los trenes
include 'src/services/trenService.php';
include 'src/controller.php';
include 'src/auth.php';

$auth = new Authentication();
$auth->verify();

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
$service = new TrenService();
Controller::handleRequest($service);

?>