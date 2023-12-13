<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <title>actualizado</title>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>

<body>
    <form id="actualizadoId" name="actualizado" method="post" action="actualiza.php">
        <p>
            <label for="id">nombre:</label>
            <input type="text" name="name" id="name">
        </p>
        <?php
        $host = "localhost:3306";
        $user = "root";
        $password = "53633393S";
        $conexion = mysqli_connect($host, $user, $password) or die("error de conexión");
        mysqli_select_db($conexion, "pruebaPhp");
        $consultar = "SELECT * FROM clientes";
        $registros = mysqli_query($conexion, $consultar);
        echo "<label for='seleccionar'>Elige un nombre: </label>";
        echo "<select name='seleccionar' id='seleccionar'>";
        while ($tupla = mysqli_fetch_row($registros)) {
            echo "<option value='$tupla[0]'>" . $tupla[1] . "</option>";
        }
        echo "</select>";
        ?>
        <input type="submit" name="actualizar" value="actualizar">
    </form>
</body>

</html>