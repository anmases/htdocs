<?php
$contador = 1;
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Contador</title>
</head>
<body>
    <h2>Contando hasta 5</h2>
    <ul>
        <?php while($contador <= 5): ?>
            <li><?php echo $contador; ?></li>
            <?php $contador++; ?>
        <?php endwhile; ?>
    </ul>
</body>
</html>
