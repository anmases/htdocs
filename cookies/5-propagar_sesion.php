<?php
session_start();
$_SESSION['iniciada'] = true;
$_SESSION['nombre'] = "antonio";
$_SESSION['edad'] = 29;

echo "identificador de sesión ".session_id()."<br>";
echo "nombre de sesión ".session_name()."<br>";
echo "Nombre: ".$_SESSION['nombre']."<br>";
echo "edad: ".$_SESSION['edad']."<br>";

echo "<a href='session2.php'>Comprobar las variables en otra web</a><br>";
echo "<a href='session3.php'>finaliza la sesión</a><br>";
?>