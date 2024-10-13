<?php
use PHPUnit\Framework\TestCase;
require_once("divide.php");

class divideTest extends TestCase{
	private $divideObj;
	protected function setUp(): void {
		$this->divideObj = new Divide();
	}
	protected function tearDown(): void {
		unset($this->divideObj);
	}
	public function test_divide(){
		$this->assertSame(2, $this->divideObj->divide_func(4,2));
		//A partir de aquí, esperamos una excepción más adelante.
		$this->expectException("Exception");
		$this->expectExceptionCode(100);
		$this->expectExceptionMessage("Cannot divide by 0");

		$this->divideObj->divide_func(4,0);
		$this->assertSame(0,1); //no ejecutado
	}
}
?>