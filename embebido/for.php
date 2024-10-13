<?php
$max = 5;
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Números</title>
</head>
<body>
    <h2>Lista de números</h2>
    <ul>
        <?php for($i = 1; $i <= $max; $i++): ?>
            <li><?php echo $i; ?></li>
        <?php endfor; ?>
    </ul>
</body>
</html>
