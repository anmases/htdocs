<?php
use PHPUnit\Framework\TestCase;
require_once("divide.php");

/**
 * More anotations in https://docs.phpunit.de/en/11.4/
 * 
 */
class anotationTest extends TestCase{
	private $divideObj;
	protected function setUp(): void{
		$this->divideObj = new Divide();
	}
	protected function tearDown(): void {
		unset($this->divideObj);
	}
	/**
	 * @after
	 * @group grupo1
	 */
	public function testAfter(){
		//Se ejecutará la última.
		$this->assertSame(1,1);
	}
	/**
	 * @author Antonio Mas
	 * @group grupo1
	 */
	public function testAuthor(){
		$this->assertSame(1,1);
	}
		/**
	 * @before
	 * @group grupo1
	 */
	public function testBefore(){
		//Se ejecutará la primera.
		$this->assertSame(1,1);
	}
	/**
	 * @covers Divide::divide_func
	 * @uses Divide
	 * @expectedException Exception
	 */
	public function test_divide(){
		$this->assertSame(2, $this->divideObj->divide_func(4,2));
		//A partir de aquí, esperamos una excepción más adelante.
		$this->expectException("Exception");
		$this->expectExceptionCode(100);
		$this->expectExceptionMessage("Cannot divide by 0");

		$this->divideObj->divide_func(4,0);
		$this->assertSame(0,1); //no ejecutado
	}
	/**
	 * @test
	 */
	public function same(){
		//podemos no poner la palabra test al inicio
		$this->assertSame(1,1);
	}
	/**
	 * @param string     $input
	 * @param int        $expectedLength
	 * 
	 * @testWith         ["test", 4]
	 *                   ["longer-string", 13]
	 */
	public function testStringLength(string $input, int $expectedLength){
		//proveemos datos desde anotaciones
		$this->assertSame($expectedLength, strlen($input));
	}
}
?>