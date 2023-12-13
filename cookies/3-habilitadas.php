<?php
//creamos una cookie de prueba:
setcookie("test", 1);
if(count($_COOKIE) > 0){
    echo "las cookies están habilitadas";
    echo "<br>";
    var_dump($_COOKIE);
}else{
    echo "las cookies están deshabilitadas";
}

?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>cookies</title>
    </head>
    <body>
        <?php if(!isset($_GET["aceptar"]) && !isset($_COOKIE["micookie"])):  ?>
       
        <?php endif; ?>
    </body>
</html>