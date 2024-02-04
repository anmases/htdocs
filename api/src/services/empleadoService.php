<?php
include "service.php";
final class EmpleadoService extends Service{
    public function __construct(){
        parent::__construct(
            "empleado",
            array("id", "contratado", "nombre", "puesto", "estacion_id", "page"),
            array("contratado", "nombre", "puesto", "estacion_id")
            );
    } 
    protected function validate($data){
        if(!isset($data["contratado"]) ||
         !isset($data["nombre"]) ||
         !isset($data["puesto"]) ||
         !isset($data["estacion_id"]) ||
          empty($data["contratado"]) ||
           empty($data["nombre"]) ||
           empty($data["puesto"]) ||
           empty($data["estacion_id"])
            ){
            return false;
        }else{
            return true;
        }
    }
}
?>