<?php
use PHPUnit\Framework\TestCase;

//Test en la salida estándar
class outputTest extends TestCase{
	private $regex = '/divide by 0/';

	public function testExpectFoo(){
		$this->expectOutputString("foo");
		print("foo");
	}
	//Fallará
	public function testExpectBar(){
		$this->expectOutputString("bar");
		print("baz");
	}
	public function testExpectRegex(){
		$this->expectOutputRegex($this->regex);
		echo "divide by 0";
	}
}
?>