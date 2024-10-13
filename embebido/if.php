<!-- Estructuras php embebidas
 php se rendderizará en el servidor y el resto en el cliente -->
<?php
$hora = date("H"); // Obtener la hora actual en formato de 24 horas (0-23)
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Saludo según la hora</title>
</head>
<body>
    <h2>Saludo del día</h2>
    <p>
        <?php
        if ($hora < 12) {
            echo "¡Buenos días!";
        } elseif ($hora < 18) {
            echo "¡Buenas tardes!";
        } else {
            echo "¡Buenas noches!";
        }
        ?>
    </p>
</body>
</html>
