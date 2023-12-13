<?php
#definir cookies propias:
setcookie("noexpira", 1);  //nombre y valor.
setcookie("miCookie", 2, time()+10); //cookie que expira a los 10 segundos.

//Ahora, una vez hemos definido las cookies en el navegador del cliente, las podremos ver.
var_dump($_COOKIE); //array con el nombre-valor de la cookie.
//Esto nos servirá, por ejemplo, para generar nuevas respuestas personalizadas.

setcookie("idioma", "esp");
if(isset($_COOKIE["idioma"])){
    if($_COOKIE["idioma"] == "esp"){
        echo "<br><h1>Mi página web en español</h1>";
    }else{
        echo "<br><h1>My home page in english</h1>";
    }
}

#eliminar una cookie:
setcookie("noexpira", "", time()-1);    //para eliminar una cookie la redefinimos en el pasado.
?>