<?php
include "service.php";
final class EstacionService extends Service{
    public function __construct(){
        parent::__construct(
            "estacion",
            array("id", "nombre", "ciudad", "page"),
            array("ciudad", "nombre")
            );
    } 
    protected function validate($data){
        if(!isset($data["ciudad"]) || !isset($data["nombre"]) || empty($data["ciudad"]) || empty($data["nombre"])){
            return false;
        }else{
            return true;
        }
    }
}
?>