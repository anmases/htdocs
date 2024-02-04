<?php
include "service.php";
final class TrenService extends Service{
    public function __construct(){
        parent::__construct(
            "tren",
            array("id", "modelo", "capacidad", "page"),
            array("modelo", "capacidad")
            );
    } 
    protected function validate($data){
        if(!isset($data["modelo"]) || !isset($data["capacidad"]) || empty($data["modelo"]) || empty($data["capacidad"]) || !is_int($data["capacidad"])){
            return false;
        }else{
            return true;
        }
    }
}
?>