<?php
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
//array multidimensional
$matriz = array(
    "vector1"=>array("uno", "dos", "tres"),
    "vector2"=>array("uno", "dos", "tres")
);
//Count cuenta los elementos de un array.
$elementos = count($vector);
//así se representan los elementos de un array:
echo "<p>".$vector[0]."</p>";
//ASí añadimos elementos al array:
$vector[] = "cuatro"; //Añade al final.
array_push($vector, "cinco"); //Añade al final.
array_unshift($vector, "zero"); //añade al comienzo
array_pop($vector); //Elimina el último
array_shift($vector); //Elimina el primero.
unset($vector[2]); //elimina el elemento 2

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
?>