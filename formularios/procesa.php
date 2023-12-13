<?php
  //formulario 1
    if(isset($_POST['usuario'])){
        if(!empty($_POST['usuario'])){
            $usuario = $_POST['usuario'];
            echo "nombre de usuario: ".$usuario;
        }
    }
    if(isset($_POST['password'])){
        if(!empty($_POST['password'])){
            $usuario = $_POST['password'];
            echo "contrasenya: ".$usuario;
        }
    }
/*
    ///formulario 2:
       echo ini_get("file_uploads"). "\n<br>";
       echo ini_get("upload_tmp_dir"). "\n<br>";
       echo ini_get("upload_max_filesize"). "\n<br>";   //con esto podemos comprobar parámetros del fichero php.ini

       var_dump($_FILES);
       echo "<br>";
       /* campos de $_FILES:
       [nombre petición] =>{
       -name (nombre)
       -full_path (nombre de la ruta)
       -type (tipo)
       -error (código de error)
       -size (tamaño)
       -tmp_name (nombre directorio temporal)
       }
        
       $directorioTmp = $_FILES['imagen']['tmp_name'];
       move_uploaded_file($directorioTmp, $_FILES['imagen']['name']);
   */

       ///subida mejorada:
       $directorioSubida = "uploads/";
       $maxFileSize = "5120000"; //aunque si en php.ini está limitado, el máximo será el de php.ini
       $extensionesValidas = array("jpg", "png", "bmp", "gif");
       var_dump($_POST);
       if(isset($_POST["submit"]) && isset($_FILES['imagen'])){
        
        $errores = 0;
        $nombreArchivo = $_FILES['imagen']['name'];
        $tamanyoArchivo = $_FILES['imagen']['size'];
        $directorioTmp = $_FILES['imagen']['tmp_name'];
        $tipoArchivo = $_FILES['imagen']['type'];
        $arrayInfo = pathinfo($nombreArchivo);
        //var_dump($arrayInfo);
        $extension = $arrayInfo['extension'];
        if(!in_array($extension, $extensionesValidas)){
            echo "extensión no válida";
            $errores = 1;
        }
        if($tamanyoArchivo > $maxFileSize){
            echo "la imagen supera el tamaño máximo";
            $errores = 1;
        }
        if($errores == 0){
            $nombreCompleto = $directorioSubida.$nombreArchivo;
            move_uploaded_file($directorioTmp, $nombreCompleto);
            echo "fichero subido correctamente";
        }
       }

?>