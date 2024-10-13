<?php
#Definición de clases:
class Persona {
    //campos:
    private String $nombre;
    private String $apellidos;
    private int $edad;

    //constructor (es como un método especial):
    public function __construct(String $nombre, String $apellidos, int $edad){
        // el operador -> es para llamar a un campo o función, sería como el . en java
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->edad = $edad;
    }

    //setters y getters:
    public function setNombre(String $nombre){
       $this->nombre = $nombre;
    }
    //se puede poner el tipo de dato que debe devolver el método. Si no se pone nada, por defecto es void.
    public function setApellidos(String $apellidos) : void{
       $this->apellidos = $apellidos;
    }
    public function setEdad(int $edad){
        $this->edad = $edad;
    }

    public function getNombre():String{
        return $this->nombre;
    }
    public function getApellidos():String{
        return $this->apellidos;
    }
    public function getEdad():int{
        return $this->edad;
    }

    //otros métodos:
    public function hablar():String{
        #Se usa el . para concatenar strings:
      return "Hola, me llamo". $this->nombre . $this->apellidos . "y tengo" . $this->edad . "años";
    }
    /**
     * Se pueden crear método estáticos, a nivel de clase, que no requieren una instancia.
     */
    public static function esAnimal() : bool{
        return true;
    }
}

$antonio = new Persona("antonio", "mas", 29);  //instanciar una clase
$antonio->getEdad();

Persona::esAnimal();   //El operador de resolución de ámbito se usa para acceder a constantes, métodos estáticos, 
//es una referencia a la clase, a diferencia de -> que es a la instancia.


//Define constantes con un método en tiempo de ejecución.
define("CONSTANTE", "valor");


#Herencia:
class Alumno extends Persona{
    private String $curso;
    //Es una constante de clase, en tiempo de compilación.
    public const CONDICION = "Menor de edad";
    
    public function __construct(String $nombre, String $apellidos, int $edad, String $curso){
        //de esta forma se llama al constructor de la superclase
        parent::__construct($nombre, $apellidos, $edad);
        $this->curso = $curso;
    }
		//$this hace referencia al objeto instanciado de la clase, self a la clase en sí y parent a la superclase.
    public function mostrarCondicion(){
        return self::CONDICION;
    }


/**
 * Esto indica que un método no puede ser sobreescrito. En el caso de marcar una clase como final, esta no podrá ser heredada
 */
    public final function estudiar(){}
}

#Clases abstractas:
abstract class Entidad{
    // método abstracto que deberá ser implementado necesariamente en las clases que hereden de esta clase.
    abstract public function existir();
}

#Interfaces

interface Datable{
    //En una interfaz se pueden definir constantes. Aunque las constantes son estáticas, se acceden a nivel de clase pero no por instancia.
    const FORMATO = "UTC";
    //una interfaz solo contiene método que deberán ser implementados, son abstractos aunque no lo ponga.
    public function dating(DateTime $date);
}

class Cita implements Datable{
    private DateTime $date;
    public function dating($date){
        $this->date = $date;
    }
    public function getFormat(){
        return Datable::FORMATO;
    }
}

#Rasgos
//los rasgos o traits son como subclases o fragmentos de clase,
// contienen código cuyo único propósito es su reutilización.
// Su relación con las clases no es de herencia sino de composición.

trait Publicable{
    //puede contener métodos, estáticos, variables o abstractos, pero no constantes.
    public String $estado = "borrador";
    public function publicar() {
        $this->estado = 'publicado';
        $this->publicarNotificacion();
    }

    public function archivar() {
        $this->estado = 'archivado';
    }

    public function notificar() {
        echo 'El elemento ha sido notificado.';
    }
}
class Cancion{
    use Publicable;
}
class Video{
    use Publicable;
}
class Podcast{
    use Publicable;
}

#Métodos relacionados con las clases:
class_exists("Persona"); //devuelve un booleano de si existe o no.
class_implements("Cita"); //devuelve un array con las clases que implementa
class_parents("Alumno"); //devuelve un array con sus clases padre.
get_class($antonio);   //devolverá en nombre de la clase de un objeto.
get_class_vars("Persona"); //devuelve un array con los campos de la clase, solo si son públicos.
get_class_methods("Persona"); //devuelve un array con los métodos de la clase, ''.


?>