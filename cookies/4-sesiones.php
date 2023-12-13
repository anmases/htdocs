<?php

session_id("222"); //definimos un id de sesión. Se queda almacenado.
echo session_id();
echo session_name(); //si no definimos nombre, por defecto es PHPSESSID
session_start(); //iniciar la sesión
//asignamos entradas al array asociativo de la sesión.
$_SESSION["iniciada"] = true;
$_SESSION["nombre"] = "antonio";

#borrar los datos de sesión
unset($_SESSION["iniciada"]);
unset($_SESSION["nombre"]);

#eliminar la sesión:
session_destroy();  //no elimina variables globales ni cookies.

session_unset(); //elimina las variables globales de esa sesión.

?>