<?php
$to = "antoniomas33@hotmail.com";
$asunto = "Email de prueba PHP";
$mensaje = "hola, buenas tardes";
$from = "admin@dominio.com";
$headers = "From: $from";

mail($to, $asunto, $mensaje, $headers);
echo "Email enviado";
?>