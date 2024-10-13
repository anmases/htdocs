<?php
include "service.php";
final class TrenService extends Service{
    public function __construct(){
        parent::__construct(
            "tren",
            array("id", "modelo", "capacidad", "page"),
            array("modelo", "capacidad", "thumbnail")
            );
    } 

    protected function validate($data){
        if(!isset($data["modelo"]) ||
        !isset($data["thumbnail"]) ||
         !isset($data["capacidad"]) ||
          empty($data["modelo"]) ||
           empty($data["capacidad"]) ||
           empty($data["thumbnail"]) ||
            !is_int($data["capacidad"])
        ){
            return false;
        }else{
            $img_array = explode(";base64,", $data["thumbnail"]);
            $extension = strtoupper(explode('/', $img_array[0])[1]);
            if($extension != 'PNG' && $extension != 'JPEG' && $extension != 'JPG'){
                return false;
            }
            return true;
        }
    }
}
?>