<?php
//capturar las variables que se han propagado.
session_start(); //esto no inicia una antigua sesión, sino que refresca la que ya teníamos.
if(isset($_SESSION['iniciada']) && $_SESSION['iniciada'] == true){
    echo "Nombre: ".$_SESSION['nombre']."<br>";
    echo "edad: ".$_SESSION['edad']."<br>";
}else{
    echo "no se ha definido la sesión";
}
?>