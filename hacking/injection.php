<?php
$servername = "localhost";
$username = "root";
$password = "53633393S";
$dbname = "users";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombreUsuario = $_POST['nombreUsuario'];
$contrasena = $_POST['contrasena'];

// Preparar y ejecutar la consulta
$sql = "SELECT id FROM usuarios WHERE nombreUsuario = $nombreUsuario AND contrasena = $contrasena";
echo $sql ."<br>";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // El usuario y contraseña son correctos
    echo "<!DOCTYPE html>
    <html>
    <head>
        <title>Inicio de Sesión Exitoso</title>
    </head>
    <body>
        <h1>Inicio de sesión exitoso</h1>
        <p>Bienvenido, $nombreUsuario!</p>
    </body>
    </html>";
} else {
    // Usuario o contraseña incorrectos
    echo "Nombre de usuario o contraseña incorrectos";
}

$conn->close();
?>