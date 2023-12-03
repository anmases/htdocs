<?php
$suma = 10+2;
$resta = 10-2;
$multiplicacion = 20*2;
$division = 20/2;
$modulo = 10%2;
$potencia = 2**2;
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
?>