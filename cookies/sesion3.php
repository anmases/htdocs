<?php
session_unset();
session_destroy();

if(isset($_SESSION['iniciada']) && $_SESSION['iniciada'] == true){
    echo "Nombre: ".$_SESSION['nombre']."<br>";
    echo "edad: ".$_SESSION['edad']."<br>";
}else{
    echo "no se ha definido la sesión";
}
?>