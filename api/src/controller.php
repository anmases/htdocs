<?php
abstract class Controller{
    public static function handleRequest($service){
        switch($_SERVER['REQUEST_METHOD']){
            case "GET":
                Response::result(200, $service->get($_GET));
                break;
            case "POST":
                $data = json_decode(file_get_contents('php://input'), true);
                Response::result(201, $service->post($data));
                break;
            case "PUT":
                $data = json_decode(file_get_contents('php://input'), true);
                Response::result(200, $service->put($data, $_GET['id']));
                break;
            case "DELETE":
                Response::result(200, $service->delete($_GET['id']));
                break;
            default:
                header("HTTP/1.1 405 Method Not Allowed");
                exit();
        }
    }
}
?>