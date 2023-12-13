<?php
//abrir el fichero (crea un puntero al fichero):
    const fileName = "fichero.txt";
    $file = fopen(fileName, "r+");
    if($file == false){
        echo "No se ha podido abrir el fichero";
    }else{
//leer el fichero:
        $contenido = fread($file, filesize("fichero.txt"));  //debemos indicar el tamaño del fichero se obtiene con filesize.
        echo $contenido;
        rewind($file);     //ponemos de nuevo el puntero al inicio.
        $primerChar = fgetc($file); //lee el primer caracter desde donde se encuentre el puntero.
        echo $primerChar;
        rewind($file); 
        $primeraLinea = fgets($file); //lee la línea entera donde esté el puntero.
        echo $primeraLinea;
        rewind($file);

        //recorrerlo todo caracter a caracter (también vale para línea a línea):
        while(feof($file)==false){
            echo fgetc($file);
        }

        $todo = file_get_contents(fileName);   //vuelca todo el contenido de un fichero a string.
        echo $todo;

        $fileArray = file(fileName);     //vuelca todo el contenido a un array de líneas.
        var_dump($fileArray);


    }
//cerramos el fichero:
fclose($file);

//Escribimos en fichero (fwrite o fputs indistintamente):
      $file = fopen(fileName, "a+");    ///abrimos en modo añadir.
      fwrite($file, "\nEscribiendo contenido dentro del fichero");
      fflush($file); //hace un flush

      $info = stat(fileName);   //obteiene un array con información del fichero.
      var_dump($info);

//cerramos el fichero:
fclose($file);

////////////////////////////////////////Directorios////////////////////////////////////
        echo getcwd();   //nos devuelve el directorio en el que estamos.
        $directorio = scandir(getcwd()); //devuelve un array con el contenido del directorio.
        var_dump($directorio);

        mkdir("directorio", $recursive = true);   //crea un directorio. (mode es para establecer los permisos y recursive para decir si se podrán anidar otros dentro)

        chdir("../");   //navega a otro directorio, como si fuera el cd.
        echo getcwd();
?>