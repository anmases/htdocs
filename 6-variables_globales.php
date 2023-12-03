<?php
print_r($_SERVER);  //Es un array asociativo con muchos valores del sistema y del servidor.
//ejemplo:
echo $_SERVER["SERVER_NAME"];
echo "<br>";
echo $_SERVER["SERVER_PORT"];
echo "<br>";
echo $_SERVER["SERVER_SOFTWARE"];

print_r($GLOBALS); //acceder a las variables globales que se hayan definido. Es un array asociativo nombre-valor

#También hay constantes predefinidas:
echo PHP_VERSION; //versión de php.
echo PHP_INT_MAX; //el valor máximo de entero (con MIN es el mínimo).
echo PHP_FLOAT_MAX; //El valor máximo de float.
echo PHP_OS; //muestra el SO donde se ejecuta.
echo DIRECTORY_SEPARATOR; //el separador de directorio, si es \ o /


#Obtención de variables por URL:
     //Sintaxis: urlBase?param1=valor&param2=valor...
     echo $_GET["param1"];
     echo $_GET["param2"];
?>