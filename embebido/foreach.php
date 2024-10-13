<?php
$frutas = ["manzana", "banana", "naranja"];
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Frutas</title>
</head>
<body>
    <h2>Lista de frutas</h2>
    <ul>
        <?php foreach($frutas as $fruta): ?>
            <li><?php echo $fruta; ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
