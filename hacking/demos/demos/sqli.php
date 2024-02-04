<html>
<head></head>
<body>
<form action="sqli.php" method="get">
Login: <input type="text" name="user">
Pass: <input type="text" name="pass">
<input type="submit">

<?php 
if (isset($_GET["user"]))
 {
  $conexion = mysqli_connect("localhost:3306", "root", "53633393S", "demos");
  if (!$conexion) {
      die("Error de conexión: " . mysqli_connect_error());
  }
  
  $user = mysqli_real_escape_string($conexion, $_GET["user"]);
  $pass = mysqli_real_escape_string($conexion, $_GET["pass"]);
  
  $queEmp = "SELECT * FROM demos.usuarios WHERE user = '$user' AND pass = '$pass'";
  $resEmp = mysqli_query($conexion, $queEmp) or die(mysqli_error($conexion));
  $totEmp = mysqli_num_rows($resEmp);

if ($totEmp> 0) {
   $rowEmp = mysqli_fetch_assoc($resEmp);
   $usuario=$rowEmp['User'];
   session_id($usuario);
   session_start();
   $_SESSION['username'] = $usuario;
   echo "<br></br>";
   echo "El usuario es: ".$usuario;
   echo "<br></br>";
   echo "<a href='sqliDatos.php'>Ver datos</a>";
   
  }
else{
	echo "Usuario o password incorrecto";
}

 }?>
</form>
</body>
</html>