<?php
include 'config.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $result = $con->query("SELECT * FROM tren");
    $rows = array();
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    echo json_encode(array("message" => "Solo se admiten peticiones GET"));
}
?>