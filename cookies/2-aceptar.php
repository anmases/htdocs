<?php
if(isset($_GET["aceptar"])){
    $caducidad = time() + 60*60*24*365;
    setcookie("micookie", 1, $caducidad);
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
        <div>
            <h2>cookies</h2>
            <p>debes aceptar las cookies para seguir navegando</p>
            <a href="?aceptar=1">aceptar</a>
        </div>
        <?php endif; ?>
    </body>
</html>