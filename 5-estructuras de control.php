<?php
#Condicional if-elseif-else tradicional:
$condicion = true;
if('hola' == 'adios'){
    echo "no";
}elseif('hola' === 'ola'){
    //con == comparamos que sean iguales y con === iguales y además del mismo tipo. Distinto: != o <>
    print "no";
}else{
    echo("Si");
}

//si solo es una condición no hacen falta llaves:
if ($condicion) print("verdadero");
elseif (3>2) print("también verdadero");
else print("false");

//forma alternativa:
if($condicion):
    //instrucciones.
elseif(2>3):
    //instrucciones.
else:
    //instrucciones.
endif;

#Condicional ternario:
$condicion ? "es verdad": "es mentira";

#condicional switch-case:
$num = 1;
switch($num){
    case 1:
        echo 1;
        break;
    case 2:
        echo 2;
        break;
    case 3:
        echo 3;
        break;
    default:
        echo "default";
        break;  
}

#Bucle while:

$contador = 0;
while($contador < 10){
    echo $contador;
    $contador++;
}

#Bucle do-while:
    do{
        printf("bucle inifinito");
    }while(2+2==4);

#Bucle for:

    for($i = 0; $i<=5; $i++){
        echo "el valor es $i \n";
    }

#Bucle foreach:
$lista = [1, 2, 3, 4, 5, 6];
foreach($lista as $valor){
    printf("el valor es: $valor");
}

$mapa = ["manzana"=>1.50, "pera"=>2.00, "platano"=>1.75];
foreach($mapa as $clave=>$valor){
    print("La fruta $clave tiene el precio: $valor");
}

///podemos usar break para salir del bucle y continue para saltar a la siguiente iteración:
while (true){
    while(true){
        $contador++;
        if($contador<10):
            break 2;       //con el nº 2 le indicamos que salga de los dos bucles.
        endif;
        if($contador<5):
            continue 2;  //salta a la siguiente iteración del 2º bucle superior.
        endif;
    }
}

#Include/ require y goto:

include_once "1-variables.php"; //usamos include para incluir el código de otro fichero php en el nuestro.
include "1-variables.php"; //en este caso no lo volvería a incluir porque ya lo hemos incluido una vez con include_once

require_once "2-objetos.php"; //Es igual que el include, pero genera un error si no lo encuentra. Include solo warning.
require "2-objetos.php"; //igual que con include, solo lo incluiría una vez.

#GOTO (desaconsejado):

goto etiqueta;

print "esta línea no se ejecutará";

etiqueta:
//El go to salta a otra parte del código, haciendo que lo que queda en medio no se ejecute.
print "aquí continua la ejecución";



?>