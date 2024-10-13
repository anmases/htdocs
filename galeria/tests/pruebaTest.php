<?php
# Aquí incluiríamos las clases o métodos a probar.
use PHPUnit\Framework\TestCase;

class pruebaTest extends TestCase{
	private $example;
	private $empty_array;
	private static $db;

	public static function setUpBeforeClass(): void {
		//para inicializar variables globales o realizar configuraciones antes de TODOS los test.
		self::$db = new PDO("sqlite::memory:");
	}

	public static function tearDownAfterClass(): void {
		//para inicializar variables globales o realizar configuraciones después de TODOS los test.
		self::$db = null;
	}


	protected function setUp(): void {
		//para inicializar variables globales o realizar configuraciones antes de CADA test.
		$this->example = "1";
		$this->empty_array = array();
	}
	protected function tearDown(): void {
		//para limpiar variables globales o realizar configuraciones después de CADA test.
		unset($this->example);
	}

	public function testSuma(){
			$resultado = 2 + 3;
			$this->assertEquals(5, $resultado);
	}

	public function testEmpty(){
		$this->example = "2";
		$this->assertEmpty($this->empty_array);
		$this->assertTrue(empty($this->empty_array));
	}

	public function testEquals(){
		$this->assertEquals($this->example, "1");
	}

	public function testEmpty2(): array{
		$stack = [];
		$this->assertEmpty($stack);
		return $stack;
	}
	/**
	 * @depends testEmpty2
	 */
	public function testPush(array $stack): array{
		array_push($stack, "aaaa");
		$this->assertSame("aaaa", $stack[count($stack)-1]);
		$this->assertNotEmpty($stack);
		return $stack;
	}
	/**
	 * @depends testPush
	 */
	public function testPop(array $stack){
		$this->assertSame("aaaa", array_pop($stack));
		$this->assertEmpty($stack);
	}
}
?>