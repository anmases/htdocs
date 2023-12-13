<?php
#Definición:
$var = 0;
/*
podemos especificar el tipo de dato en los parámetros así como en el retorno
*/
function nombre(int $param1, int $param2, float $param3): int{
    //instrucciones
    return 2;  //retorno
}

$resultado = nombre(1, 2, 3);   ///llamada a la función.


#Paso por valor(lo que hagamos dentro de la función no cambia la variable que le hemos pasado fuera de la función):
function incremento($num){
    $num++;
}
incremento($var);   //Esto no cambiará el valor de la variable de fuera
echo $var;   
#Paso por referencia (lo que hagamos dentro de la función cambia la variable que le hemos pasado):
function incremento2(&$num){
    //no podemos invocar $var en la función. Se usa & para pasar por referencia
    $num++;
}
incremento2($var);   //Esto si cambiará el valor de la variable de fuera
echo $var;   

//En java el paso de parámetro siempre es por valor,
// para pasar por valor podemos invocar directamente la variable en la función. En php no podemos.

#Recursividad:
echo "<br>";
function factorial($n){
    if($n == 1){
        return 1;
    }else{
        echo $n." x ";
        return $n * factorial($n-1);
    }
}
echo "<br>".factorial(5);

#Funciones anónimas:

//Las funciones, tanto anónimas como no anónimas, son instancias de la clase Closure.
// Por lo tanto pueden ser tratadas por referencia, como una variable
$cuadrado = function($num){
    return $num**2;
};

//Cuando tiene nombre, se puede llamar con el nombre:
function cuadrado($num){
  return $num**2;
}
$miFuncion = "cuadrado";
$miFuncion(4);  //Calcula el cuadrado

#Callbacks:
// las funciones pueden pasarse tanto por parámetro como devolverse en return.
$callback = function($datos){
    echo "datos procesados:". var_dump($datos);
};
function procesar($datos,$callback){
    $callback($datos);
}

//importar variables externas con use (no confundir con el paso por referencia):
//podríamos también añadir & al use para pasarla por referencia.
$funcion = function($num)use($var){
    echo $num*$var;
};

#Funciones flecha:
fn($num)=> $num * $var;
//son funciones que no necesitan importar las variables externas con use y que solo contienen un return de una sentencia.
?>