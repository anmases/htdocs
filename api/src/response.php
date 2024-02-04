<?php
//Esta clase construye las respuestas.
abstract class Response{
    public static function result($code, $response){
        header("Content-Type: application/json");
        header("Access-Control-Allow-Origin: *");
        http_response_code($code);
        echo json_encode($response);
    }
}
?>