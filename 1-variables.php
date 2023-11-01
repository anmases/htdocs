<?php
#variables de tipo primitivo.
//no es necesario tiparlas, php lo hace internamente.
$texto = "Hola mundo";
$numero = 24;
$decimal = 1.25;
$booleano = true;
$nulo = null;


#echo es como el print, pero admite varios parámetros separados por , y los concatena (como el print de python), print solo admite un parámetro y además devuelve true si realiza correctamente la operación.
echo "<h1>$texto , $numero</h1>";
echo "<h3>$decimal , $booleano, $nulo</h3>";
//ejemplo de concatenación de strings con el punto:
echo "<b>". $texto ."</b><br>";
echo "$texto <br> más texto";
//para poner saltos de línea en html, en lo que se visualiza, se pone <br>, 
//pero para ponerlos en php es con \n, de esta forma queda separado también en el código fuente.
echo "\n<br><b>". $texto ."</b><br>\n";
echo "$texto <br> \n más texto";
// el retorno de carro (nuevo párrafo) es con \r y el tabulador \t, además \ se usa para enmascarar comillas o signos especiales como $ internamente.
//estos caracteres se reflejan a nivel de código fuente, pero no de visualización html.

#fechas:
// el objeto date admite como parámetro el formato, w indica la semana.
// Esto devuelve un entero con el día de la semana, siendo 0 domingo.
/*códigos de formato:
    d: Día del mes, 2 dígitos con ceros iniciales (01 a 31).
    w: Día de la semana (0 a 7) siendo 0 domingo.
    n: Mes numérico.
    m: Mes numérico, con ceros iniciales (01 a 12)
    Y: Año, 4 dígitos
    H: Hora, formato 24 horas (00 a 23)
    i: Minutos (00 a 59)
    s: Segundos (00 a 59)
    l (letra 'L' en minúscula): Día completo de la semana (Sunday a Saturday)
    F: Mes completo (January a December)
    j: Día del mes sin ceros iniciales (1 a 31)
    g: Hora, formato 12 horas sin ceros iniciales (1 a 12)
    A: AM o PM
*/
$fecha = date("d - n - Y   H:i:s");
echo $fecha;
?>

