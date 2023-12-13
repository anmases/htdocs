<?php
$suma = 10+2;
$resta = 10-2;
$multiplicacion = 20*2;
$division = 20/2;
$modulo = 10%2;
$potencia = 2**2;
#funciones
abs($suma);  //valor absoluto
max([1, 2, 3]); 
min(([1, 2, 3]));
sqrt($suma);
$integer = rand(0, 10);   //genera número entero aleatorio entre 0 y 10.

#conversión
decbin(23);   //convierte decimal a binario
bindec(1011011); //binario a decimal.
dechex(445);  //decimal a hexadecimal.
hexdec("4FB"); //hexadecimal a binario

#incremento y decremento:
    //devuelve el valor e incrementa.
    $suma++;
    $suma--;
    //incrementa primero y lo devuelve incrementado:
    ++$suma;
    --$suma;
#Redondeo a 2 decimales:
round(16.3056, 2);
#Formateo de cadenas:
$decimal = 12.345;
$str = sprintf("El número es %.2f", $decimal); //se mostrará con solo 2 decimales.

#Lógicas:
$suma and $resta;
$suma && $resta;
$suma or $resta;
$suma || $resta;
$suma xor $resta;
!$suma
<>$suma;

//Comprobación:
is_int($suma);
is_float($suma);
is_bool($suma);

//formateo. Devuelve string.
$numeroFormateado = number_format($suma, 3, ",", "."); //el segundo argumento es el nº de decimales, luego el punto decimal y luego el de los miles.

//redondeo:
round(2,34334, 2, PHP_ROUND_HALF_UP);    //redondea el número, los decimales, y si es hacia arriba o abajo.
/*
PHP_ROUND_HALF_UP  redondea por arriba
PHP_ROUND_HALF_DOWN  redondea por abajo
PHP_ROUND_HALF_EVEN  redondea al siguiente par
PHP_ROUND_HALF_ODD  redondea al siguiente impar
*/
ceil($suma); //redondea hacia arriba al entero.
floor($suma); //redonde hacia abajo al entero.

?>