<?php
#Todas las estructuras de almacenamiento son mutables (puedes cambiar sus elementos)
# y sus elementos pueden ser de distinto tipo.
$listaDistinta = ["hola", 2, 3.5, true, null, new stdClass()];
#arrays de tamaño fijo:
$arrayFija = new SplFixedArray(3);
$arrayFija[0] = "1";
echo "<p>".$arrayFija[0]."</p>";
$arrayFija->setSize(4); //redimensionar el array.

#Arrays de pila (LIFO):
$stack = new SplStack();
// Agregar elementos
$stack->push('manzana');
$stack->push('banana');
$stack->push('cereza');
// Eliminar elementos
echo "<p>".$stack->pop()."</p>"; // Salida: "cereza"

#FIFO:
$queue = new SplQueue();
// Agregar elementos
$queue->enqueue('manzana');
$queue->enqueue('banana');
$queue->enqueue('cereza');
// Eliminar elementos
echo "<p>".$queue->dequeue()."</p>"; // Salida: "manzana"



#Arrays:
$vector = array("uno", "dos", "tres");
//forma abreviada:
$vector = ["uno", "dos", "tres"];
//array multidimensional
$matriz = array(
    "vector1"=>array("uno", "dos", "tres"),
    "vector2"=>array("uno", "dos", "tres")
);
//así se representan los elementos de un array:
echo "<p>".$vector[0]."</p>";

$elementos = count($vector); //Count cuenta los elementos de un array. También sizeOf()
$vector[] = "cuatro"; //Añade al final.
array_push($vector, "cinco", "seis"); //Añade al final.
array_unshift($vector, "zero"); //añade al comienzo
array_pop($vector); //Elimina el último
array_shift($vector); //Elimina el primero.
unset($vector[2]); //elimina el elemento 2
sort($vector); //ordena el vector.
rsort($vector); //ordena en sentido inverso.
ksort($capitales); //ordena el array por las claves.
array_sum($vector); //calcula la suma
array_product($vector); //calcula el producto de sus elementos.
array_reverse($vector); //devuelve un array con el orden inverso.
print_r($vector); //imprime el vector
array_slice($vector, 1, 3); //devuelve un nuevo array con los elementos 1 al 3 inclusive.
array_merge($vector, ["siete", "ocho"], ["nueve", "diez"]); //devuelve un nuevo array concatenando los que le indiquemos.
$claves =[1, 2, 3];
$valores = ["pepe", "juan", "pedro"];
array_combine($claves, $valores); //devuelve un map resultado de combinar las claves y los valores.
in_array(2, $vector); //devuelve true o false si está o no en el array.
array_search("dos", $vector); //nos devuelve el índice o clave donde está el valor.
$cuadrados = array_map(function($item){return $item*$item;}, $vector); //realizar una operación para los elementos de un array.
$pares = array_filter($vector, function($item){return $item%2 ==0;}); //devuelve un nuevo array con los elementos que cumplen una condición.
array_diff($vector, ["uno", "dos"]); //devuelve array de los elementos que NO tienen en común.
array_intersect($vector, ["uno", "dos"]); //devuelve un array con los elementos que SI tienen en común.
array_unique($vector); //devuelve un nuevo array eliminando los duplicados.
array_chunk($vector, 2); //devuelve un array de arrays (matriz) de x elementos, divide el array original en x arrays.
shuffle($vector); //desordena el array, reordena los elementos aleatoriamente.
reset($vector); //resetea el puntero del array al comienzo.
end($vector); //Lleva el puntero al final del array.
$index = current($vector);  //para ver el índice donde está el puntero.


##Arrays asociativas (como el Map, con pares clave-valor):
//1º forma:
    $capitales ["es"] = "Madrid";
    $capitales ["de"] = "Berlín";
    $capitales ["pl"] = "Varsovia";
    $capitales ["fr"] = "París";
print "<p>".$capitales["de"]."</p>";

//2º forma (abreviada):
    $capitales = array("es"=>"madrid", "de"=>"Berlín", "pl"=>"Varsovia", "fr"=>"París");
    print "<p>".$capitales["fr"]."</p>";

//3º forma abreviada:
    $capitales = ["es"=>"madrid", "de"=>"Berlín", "pl"=>"Varsovia", "fr"=>"París"];

    array_keys($capitales); //devuelve un nuevo array con las claves.
    array_values($capitales); //devuelve un nuevo array con los valores.
    array_key_exists("es", $capitales); //devuelve un booleano.
?>